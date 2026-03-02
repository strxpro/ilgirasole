import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Il Girasole | Ristorante & Pizzeria — Santa Teresa Gallura, Sardegna",
  description:
    "Scopri Il Girasole, ristorante e pizzeria nel cuore di Santa Teresa Gallura, Sardegna. Cucina sarda autentica, pizza artigianale e una terrazza con vista sulla piazza principale.",
  keywords: [
    "ristorante Santa Teresa Gallura",
    "pizzeria Sardegna",
    "cucina sarda",
    "restaurant Sardinia",
    "Italian restaurant",
    "Il Girasole",
  ],
  openGraph: {
    title: "Il Girasole | Ristorante & Pizzeria",
    description:
      "Cucina sarda autentica e pizza artigianale nel cuore di Santa Teresa Gallura.",
    type: "website",
    locale: "it_IT",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" suppressHydrationWarning>
      <body className="antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
