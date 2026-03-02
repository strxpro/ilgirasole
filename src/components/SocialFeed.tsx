"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Instagram, Facebook, Heart, MessageCircle } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

interface SocialPost {
    id: string | number;
    image: string;
    link: string;
    likes: number;
    comments: number;
    platform: "instagram" | "facebook";
}

const placeholderPosts: SocialPost[] = [
    {
        id: 1,
        image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80",
        link: "https://www.instagram.com/ristorante_il_girasole_stg/",
        likes: 243,
        comments: 18,
        platform: "instagram",
    },
    {
        id: 2,
        image: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=600&q=80",
        link: "https://www.instagram.com/ristorante_il_girasole_stg/",
        likes: 189,
        comments: 12,
        platform: "instagram",
    },
    {
        id: 3,
        image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600&q=80",
        link: "https://www.facebook.com/ristoranteilgirasole",
        likes: 312,
        comments: 24,
        platform: "facebook",
    },
    {
        id: 4,
        image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=600&q=80",
        link: "https://www.instagram.com/ristorante_il_girasole_stg/",
        likes: 156,
        comments: 9,
        platform: "instagram",
    },
    {
        id: 5,
        image: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=600&q=80",
        link: "https://www.facebook.com/ristoranteilgirasole",
        likes: 278,
        comments: 21,
        platform: "facebook",
    },
    {
        id: 6,
        image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=600&q=80",
        link: "https://www.instagram.com/ristorante_il_girasole_stg/",
        likes: 198,
        comments: 15,
        platform: "instagram",
    },
    {
        id: 7,
        image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80",
        link: "https://www.instagram.com/ristorante_il_girasole_stg/",
        likes: 421,
        comments: 33,
        platform: "instagram",
    },
    {
        id: 8,
        image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=600&q=80",
        link: "https://www.facebook.com/ristoranteilgirasole",
        likes: 167,
        comments: 11,
        platform: "facebook",
    },
];

export default function SocialFeed() {
    const { t } = useLanguage();
    const [posts, setPosts] = useState<SocialPost[]>(placeholderPosts);

    useEffect(() => {
        async function fetchPosts() {
            try {
                const res = await fetch("/api/social-feed");
                if (!res.ok) return;
                const data = await res.json();
                if (data.posts && data.posts.length > 0) {
                    setPosts(data.posts);
                }
            } catch {
                // Keep placeholder posts on error
            }
        }
        fetchPosts();
    }, []);

    if (posts.length === 0) return null;

    return (
        <section id="social" className="py-16 sm:py-24 bg-white-warm">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12"
                >
                    <p className="text-gold tracking-[0.3em] text-xs uppercase mb-3">
                        {t.social.label}
                    </p>
                    <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-brown-deep mb-4">
                        {t.social.title}
                    </h2>
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <div className="w-12 h-px bg-gradient-to-r from-transparent to-gold" />
                        <span className="text-gold text-sm">✦</span>
                        <div className="w-12 h-px bg-gradient-to-l from-transparent to-gold" />
                    </div>
                </motion.div>

                {/* Masonry Grid */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="columns-2 sm:columns-3 lg:columns-4 gap-4 space-y-4"
                >
                    {posts.map((post, i) => (
                        <motion.a
                            key={post.id}
                            href={post.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                            className="break-inside-avoid group relative overflow-hidden rounded-sm cursor-pointer block"
                        >
                            {/* Image */}
                            <div
                                className={`w-full bg-cover bg-center ${i % 3 === 0 ? "aspect-[3/4]" : i % 3 === 1 ? "aspect-square" : "aspect-[4/5]"
                                    }`}
                                style={{ backgroundImage: `url('${post.image}')` }}
                            />

                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-brown-deep/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-3">
                                <div className="flex items-center gap-4 text-cream">
                                    <div className="flex items-center gap-1.5">
                                        <Heart size={18} className="fill-cream" />
                                        <span className="text-sm font-semibold">{post.likes}</span>
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <MessageCircle size={18} />
                                        <span className="text-sm font-semibold">{post.comments}</span>
                                    </div>
                                </div>
                                <div className="mt-2">
                                    {post.platform === "instagram" ? (
                                        <Instagram size={16} className="text-gold" />
                                    ) : (
                                        <Facebook size={16} className="text-gold" />
                                    )}
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </motion.div>

                {/* Follow CTA */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="text-center mt-10 flex flex-row items-center justify-center gap-4"
                >
                    <a
                        href="https://www.instagram.com/ristorante_il_girasole_stg/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 flex items-center justify-center text-white hover:shadow-xl hover:scale-110 transition-all duration-300 shadow-lg"
                        aria-label="Instagram"
                    >
                        <Instagram size={24} />
                    </a>
                    <a
                        href="https://www.facebook.com/ristoranteilgirasole"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-14 h-14 rounded-full bg-[#1877F2] flex items-center justify-center text-white hover:shadow-xl hover:scale-110 transition-all duration-300 shadow-lg"
                        aria-label="Facebook"
                    >
                        <Facebook size={24} />
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
