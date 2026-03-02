# 📋 INSTRUKCJA INTEGRACJI — Il Girasole

Niniejszy dokument opisuje krok po kroku, jak podłączyć prawdziwe dane do strony internetowej restauracji, zastępując placeholdery (przykładowe teksty i zdjęcia) prawdziwymi treściami.

---

## 📁 Struktura Projektu

```
restaurant-landing/
├── src/
│   ├── app/
│   │   ├── globals.css          ← Kolory, fonty, style globalne
│   │   ├── layout.tsx           ← SEO (meta title, description)
│   │   └── page.tsx             ← Główna strona (łączy wszystkie komponenty)
│   ├── components/
│   │   ├── Header.tsx           ← Nagłówek / Nawigacja
│   │   ├── HeroSection.tsx      ← Sekcja powitalna (hero)
│   │   ├── MenuSelector.tsx     ← Przełącznik Ristorante / Bar
│   │   ├── InteractiveMenu.tsx  ← Interaktywne menu z kategoriami
│   │   ├── ReviewsCarousel.tsx  ← Karuzela opinii + linki do Google/TripAdvisor
│   │   ├── SocialFeed.tsx       ← Feed z social media
│   │   ├── ContactSection.tsx   ← Kontakt i mapa
│   │   └── Footer.tsx           ← Stopka
│   └── data/
│       ├── menuData.ts          ← ⭐ DANE MENU (edytuj tutaj!)
│       └── reviewsData.ts       ← ⭐ DANE OPINII (edytuj tutaj!)
```

---

## 1. 🍝 Jak Zmienić Menu Restauracji / Baru

### Plik: `src/data/menuData.ts`

To jest najważniejszy plik do edycji. Zawiera wszystkie dania i napoje.

**Jak edytować:**
1. Otwórz plik `src/data/menuData.ts`
2. Znajdź sekcję `ristorante` (dla dań) lub `bar` (dla napojów)
3. Każda kategoria ma format:

```typescript
{
  id: "unikalne-id",          // ID kategorii (bez spacji, małe litery)
  name: "Nazwa Kategorii",   // Wyświetlana nazwa
  items: [
    {
      id: "item-1",
      name: "Nazwa Dania",
      description: "Opis dania po włosku",
      price: "€22",
      icon: "🍝",             // Emoji ikona dania
    },
    // ... więcej pozycji
  ],
}
```

4. Aby **dodać nowe danie**, skopiuj blok `{ id, name, description, price, icon }` i wklej go w odpowiedniej kategorii
5. Aby **usunąć danie**, usuń cały blok od `{` do `}`
6. Aby **dodać nową kategorię**, skopiuj cały blok kategorii i zmień `id` oraz `name`

---

## 2. ⭐ Jak Podłączyć Prawdziwe Opinie (Google / TripAdvisor)

Na stronie znajdują się już linki/przyciski prowadzące do Google Reviews i TripAdvisor. Aby wyświetlać **prawdziwe opinie na żywo**, masz 3 opcje:

### Opcja A: Serwisy zewnętrzne (REKOMENDOWANE — najłatwiejsze)

**Elfsight** (https://elfsight.com) lub **Trustindex** (https://trustindex.io):
1. Załóż konto na jednym z tych serwisów
2. Podłącz swój profil Google Business lub TripAdvisor
3. Skonfiguruj wygląd widgetu (dopasuj kolory do strony)
4. Skopiuj wygenerowany kod `<script>` i `<div>`
5. **Gdzie wkleić w kodzie:**
   - Otwórz `src/components/ReviewsCarousel.tsx`
   - Zastąp zawartość komponentu kodem widgetu:

```tsx
export default function ReviewsCarousel() {
  return (
    <section id="reviews" className="py-16 sm:py-24 bg-sand-light">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Wklej tutaj kod widgetu z Elfsight/Trustindex */}
        <div className="elfsight-app-XXXXXXXX" data-elfsight-app-lazy></div>
      </div>
    </section>
  );
}
```

6. Dodaj skrypt Elfsight do `src/app/layout.tsx`:

```tsx
<head>
  <script src="https://static.elfsight.com/platform/platform.js" async></script>
</head>
```

### Opcja B: Ręczna edycja opinii

**Plik:** `src/data/reviewsData.ts`

Edytuj tablicę `reviewsData` — zmień tekst, autora, ocenę i źródło:

```typescript
{
  id: "rev-1",
  source: "google",        // "google" lub "tripadvisor"
  rating: 5,               // Liczba gwiazdek (1-5)
  text: "Treść opinii...",
  author: "Imię N.",
  date: "Styczeń 2026",
}
```

### Jak zaktualizować linki Google i TripAdvisor

W pliku `src/components/ReviewsCarousel.tsx` znajdź sekcję z "Google Reviews" i "TripAdvisor" badges i zamień adresy URL na prawdziwe linki do profili:
- **Google:** Wyszukaj restaurację na Google Maps → Skopiuj link
- **TripAdvisor:** Wyszukaj restaurację na TripAdvisor → Skopiuj link

---

## 3. 📸 Jak Podłączyć Feed z Instagrama i Facebooka

### Opcja A: Elfsight Social Feed Widget (REKOMENDOWANE)

1. Na https://elfsight.com wybierz widget "Instagram Feed" lub "Social Media Feed"
2. Zaloguj swoje konto Instagram/Facebook
3. Skonfiguruj styl siatki
4. Skopiuj kod widgetu
5. **Gdzie wkleić:**
   - Otwórz `src/components/SocialFeed.tsx`
   - Zastąp sekcję masonry grid kodem widgetu

### Opcja B: Instagram Basic Display API (dla programistów)

1. Utwórz aplikację na https://developers.facebook.com
2. Skonfiguruj "Instagram Basic Display" API
3. Wygeneruj long-lived access token
4. W pliku `src/components/SocialFeed.tsx`:
   - Zamień tablicę `placeholderPosts` na fetch z API
   - Endpoint: `https://graph.instagram.com/me/media?fields=id,caption,media_url,permalink,timestamp&access_token=TWOJ_TOKEN`

### Opcja C: Oficjalny Instagram Embed (najprostsze)

1. Na Instagram.com znajdź post, który chcesz umieścić
2. Kliknij `...` → `Embed`
3. Skopiuj kod embed
4. Wklej w `SocialFeed.tsx` zamiast placeholderów

---

## 4. 🗺️ Jak Ustawić Prawdziwą Lokalizację na Mapie

### Plik: `src/components/ContactSection.tsx`

Mapa jest już ustawiona na **Via Italia, 7, 07028 Santa Teresa Gallura**. Aby ją zaktualizować:

1. Otwórz Google Maps (https://maps.google.com)
2. Znajdź dokładny adres restauracji
3. Kliknij `Udostępnij` → `Osadź mapę`
4. Skopiuj URL z atrybutu `src` wygenerowanego `<iframe>`
5. W pliku `ContactSection.tsx` znajdź tag `<iframe>` i zamień wartość `src` na nowy URL

**Aktualne dane kontaktowe** (zmień w tym samym pliku):
- Adres: szukaj tekstu `Via Italia, 7`
- Telefon: szukaj `+39 0789 754 321`
- Email: szukaj `info@ilgirasole-sardegna.it`
- Godziny otwarcia: szukaj tablicy z `day` i `hours`

---

## 5. 🖼️ Jak Zmienić Zdjęcia

### Zdjęcie Hero (główne)
**Plik:** `src/components/HeroSection.tsx`

Znajdź linię z `backgroundImage` i zamień URL:
```tsx
backgroundImage: `url('/images/hero.jpg')`
```
Umieść prawdziwe zdjęcie w folderze `public/images/`.

### Zdjęcia w Social Feed
**Plik:** `src/components/SocialFeed.tsx`

Zmień URL-e w tablicy `placeholderPosts`:
```typescript
image: "/images/social/post-1.jpg",
```

---

## 6. 🏷️ Jak Zmienić Dane Restauracji

### Nazwa i branding:
- **Header i Footer:** `src/components/Header.tsx` i `src/components/Footer.tsx` — szukaj tekstu `Il Girasole`
- **Hero:** `src/components/HeroSection.tsx` — tytuł i podtytuł
- **SEO/Meta:** `src/app/layout.tsx` — zmień `title` i `description`

### Social media linki:
We wszystkich komponentach szukaj `https://instagram.com` i `https://facebook.com` — zamień na prawdziwe URL-e profili.

---

## 7. 🚀 Jak Uruchomić Stronę

### Lokalne testowanie:
```bash
cd restaurant-landing
npm run dev
# Strona dostępna na http://localhost:3000
```

### Budowanie wersji produkcyjnej:
```bash
npm run build
```

### Hosting (rekomendowane):
- **Vercel** (https://vercel.com) — darmowy hosting dla Next.js, jedno kliknięcie deploy
- **Netlify** (https://netlify.com) — alternatywa

---

## ⚠️ Ważne Uwagi

1. Po każdej zmianie w plikach `.ts`/`.tsx` należy odświeżyć przeglądarkę (lub dev server zrobi to automatycznie)
2. Aby zmiany były widoczne na żywej stronie, należy ponownie zbudować i wdrożyć projekt
3. Klucze API (Elfsight, Instagram, Google Maps) powinny być przechowywane w pliku `.env.local`:
   ```
   NEXT_PUBLIC_INSTAGRAM_TOKEN=twoj_token
   NEXT_PUBLIC_GOOGLE_MAPS_KEY=twoj_klucz
   ```
4. **Nigdy** nie publikuj kluczy API w publicznych repozytoriach!
