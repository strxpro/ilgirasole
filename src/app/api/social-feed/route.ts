import { NextResponse } from "next/server";
import { readFile, writeFile, mkdir } from "fs/promises";
import path from "path";

/*
 * Fetches Instagram + Facebook posts via public RSS services.
 * Results are cached to a local JSON file for stability.
 * If RSS services are unavailable, cached data is served.
 * If no cache exists, returns empty (SocialFeed shows placeholders).
 */

const INSTAGRAM_USERNAME = "ristorante_il_girasole_stg";
const FACEBOOK_PAGE = "ristoranteilgirasole";
const CACHE_DIR = path.join(process.cwd(), ".cache");
const CACHE_FILE = path.join(CACHE_DIR, "social-feed.json");
const CACHE_MAX_AGE = 60 * 60 * 1000; // 1 hour in ms
const HTTP_CACHE_SECONDS = 3600;

interface FeedPost {
    id: string;
    image: string;
    link: string;
    likes: number;
    comments: number;
    platform: "instagram" | "facebook";
}

interface CachedData {
    posts: FeedPost[];
    timestamp: number;
}

// ─── CACHE HELPERS ───────────────────────────────────

async function readCache(): Promise<CachedData | null> {
    try {
        const raw = await readFile(CACHE_FILE, "utf-8");
        return JSON.parse(raw) as CachedData;
    } catch {
        return null;
    }
}

async function writeCache(posts: FeedPost[]): Promise<void> {
    try {
        await mkdir(CACHE_DIR, { recursive: true });
        await writeFile(CACHE_FILE, JSON.stringify({ posts, timestamp: Date.now() }));
    } catch {
        // Cache write failure is non-critical
    }
}

// ─── IMAGE EXTRACTION ────────────────────────────────

function extractImage(html: string): string {
    const match = html.match(/<img[^>]+src="([^"]+)"/);
    return match?.[1] || "";
}

// ─── INSTAGRAM FETCHERS ──────────────────────────────

async function fetchInstagramRSSHub(): Promise<FeedPost[]> {
    const url = `https://rsshub.app/instagram/user/${INSTAGRAM_USERNAME}`;
    const res = await fetch(url, {
        headers: { Accept: "application/json" },
        signal: AbortSignal.timeout(8000),
    });
    if (!res.ok) throw new Error(`RSSHub IG: ${res.status}`);

    const data = await res.json();
    const items = data?.items || [];

    return items.slice(0, 5).map((item: Record<string, unknown>, i: number) => {
        const content = (item.content_html || item.summary || "") as string;
        let image = extractImage(content);
        const attachments = item.attachments as Array<{ url: string }> | undefined;
        if (!image && attachments?.[0]?.url) image = attachments[0].url;

        return {
            id: String(item.id || `ig-${i}`),
            image,
            link: (item.url || `https://www.instagram.com/${INSTAGRAM_USERNAME}/`) as string,
            likes: 0,
            comments: 0,
            platform: "instagram" as const,
        };
    }).filter((p: FeedPost) => p.image);
}

async function fetchInstagramRSSBridge(): Promise<FeedPost[]> {
    const url = `https://rss-bridge.org/bridge01/?action=display&bridge=InstagramBridge&context=Username&u=${INSTAGRAM_USERNAME}&media_type=all&direct_links=on&format=Json`;
    const res = await fetch(url, { signal: AbortSignal.timeout(8000) });
    if (!res.ok) throw new Error(`RSS-Bridge IG: ${res.status}`);

    const data = await res.json();
    const items = data?.items || [];

    return items.slice(0, 5).map((item: Record<string, unknown>, i: number) => {
        const content = (item.content_html || "") as string;
        let image = extractImage(content);
        const attachments = item.attachments as Array<{ url: string }> | undefined;
        if (!image && attachments?.[0]?.url) image = attachments[0].url;

        return {
            id: String(item.id || `ig-b-${i}`),
            image,
            link: (item.url || `https://www.instagram.com/${INSTAGRAM_USERNAME}/`) as string,
            likes: 0,
            comments: 0,
            platform: "instagram" as const,
        };
    }).filter((p: FeedPost) => p.image);
}

// ─── FACEBOOK FETCHERS ───────────────────────────────

async function fetchFacebookRSSBridge(): Promise<FeedPost[]> {
    const url = `https://rss-bridge.org/bridge01/?action=display&bridge=FacebookBridge&context=User&u=${FACEBOOK_PAGE}&media_type=all&format=Json`;
    const res = await fetch(url, { signal: AbortSignal.timeout(8000) });
    if (!res.ok) throw new Error(`RSS-Bridge FB: ${res.status}`);

    const data = await res.json();
    const items = data?.items || [];

    return items.slice(0, 4).map((item: Record<string, unknown>, i: number) => {
        const content = (item.content_html || "") as string;
        let image = extractImage(content);
        const attachments = item.attachments as Array<{ url: string }> | undefined;
        if (!image && attachments?.[0]?.url) image = attachments[0].url;

        return {
            id: String(item.id || `fb-${i}`),
            image,
            link: (item.url || `https://www.facebook.com/${FACEBOOK_PAGE}`) as string,
            likes: 0,
            comments: 0,
            platform: "facebook" as const,
        };
    }).filter((p: FeedPost) => p.image);
}

async function fetchFacebookRSSHub(): Promise<FeedPost[]> {
    const url = `https://rsshub.app/facebook/page/${FACEBOOK_PAGE}`;
    const res = await fetch(url, {
        headers: { Accept: "application/json" },
        signal: AbortSignal.timeout(8000),
    });
    if (!res.ok) throw new Error(`RSSHub FB: ${res.status}`);

    const data = await res.json();
    const items = data?.items || [];

    return items.slice(0, 4).map((item: Record<string, unknown>, i: number) => {
        const content = (item.content_html || item.summary || "") as string;
        let image = extractImage(content);
        const attachments = item.attachments as Array<{ url: string }> | undefined;
        if (!image && attachments?.[0]?.url) image = attachments[0].url;

        return {
            id: String(item.id || `fb-h-${i}`),
            image,
            link: (item.url || `https://www.facebook.com/${FACEBOOK_PAGE}`) as string,
            likes: 0,
            comments: 0,
            platform: "facebook" as const,
        };
    }).filter((p: FeedPost) => p.image);
}

// ─── FETCH WITH FALLBACK ─────────────────────────────

async function fetchWithFallback(
    ...fetchers: (() => Promise<FeedPost[]>)[]
): Promise<FeedPost[]> {
    for (const fetcher of fetchers) {
        try {
            const posts = await fetcher();
            if (posts.length > 0) return posts;
        } catch {
            continue;
        }
    }
    return [];
}

// ─── INTERLEAVE POSTS ────────────────────────────────

function interleave(ig: FeedPost[], fb: FeedPost[]): FeedPost[] {
    const result: FeedPost[] = [];
    const maxLen = Math.max(ig.length, fb.length);
    for (let i = 0; i < maxLen; i++) {
        if (i < ig.length) result.push(ig[i]);
        if (i < fb.length) result.push(fb[i]);
    }
    return result.slice(0, 8);
}

// ─── API HANDLER ─────────────────────────────────────

export async function GET() {
    try {
        // Check cache first
        const cached = await readCache();
        if (cached && Date.now() - cached.timestamp < CACHE_MAX_AGE && cached.posts.length > 0) {
            return NextResponse.json(
                { posts: cached.posts, source: "cache" },
                { headers: { "Cache-Control": `public, s-maxage=${HTTP_CACHE_SECONDS}, stale-while-revalidate=${HTTP_CACHE_SECONDS * 2}` } }
            );
        }

        // Fetch fresh data from both platforms in parallel
        const [igPosts, fbPosts] = await Promise.all([
            fetchWithFallback(fetchInstagramRSSHub, fetchInstagramRSSBridge),
            fetchWithFallback(fetchFacebookRSSBridge, fetchFacebookRSSHub),
        ]);

        const allPosts = interleave(igPosts, fbPosts);

        // Save to cache if we got results
        if (allPosts.length > 0) {
            await writeCache(allPosts);
        } else if (cached && cached.posts.length > 0) {
            // RSS failed but we have old cache — serve it
            return NextResponse.json(
                { posts: cached.posts, source: "stale-cache" },
                { headers: { "Cache-Control": `public, s-maxage=300, stale-while-revalidate=600` } }
            );
        }

        return NextResponse.json(
            { posts: allPosts, source: allPosts.length > 0 ? "live" : "empty" },
            { headers: { "Cache-Control": `public, s-maxage=${HTTP_CACHE_SECONDS}, stale-while-revalidate=${HTTP_CACHE_SECONDS * 2}` } }
        );
    } catch {
        // Last resort: try cache
        const cached = await readCache();
        if (cached && cached.posts.length > 0) {
            return NextResponse.json({ posts: cached.posts, source: "error-cache" }, { status: 200 });
        }
        return NextResponse.json({ posts: [], source: "error" }, { status: 200 });
    }
}
