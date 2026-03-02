export interface Review {
    id: string;
    source: "tripadvisor" | "google";
    rating: number;
    text: string;
    author: string;
    date: string;
}

export const reviewsData: Review[] = [
    {
        id: "rev-1",
        source: "tripadvisor",
        rating: 5,
        text: "Un'esperienza gastronomica indimenticabile! Il porceddu era perfetto e il Vermentino di Gallura si abbinava meravigliosamente. La vista dalla terrazza al tramonto è magica. Torneremo sicuramente!",
        author: "Marco B.",
        date: "Ottobre 2025",
    },
    {
        id: "rev-2",
        source: "google",
        rating: 5,
        text: "Best restaurant in Santa Teresa Gallura! The seafood is incredibly fresh and the atmosphere is pure Italian charm. The staff made us feel like family. A must-visit when in Sardinia.",
        author: "Sarah L.",
        date: "Settembre 2025",
    },
    {
        id: "rev-3",
        source: "tripadvisor",
        rating: 5,
        text: "Abbiamo cenato qui tre volte durante la nostra vacanza. I malloreddus alla campidanese sono i migliori che abbia mai assaggiato. Servizio impeccabile e prezzi giusti per la qualità offerta.",
        author: "Giovanni R.",
        date: "Agosto 2025",
    },
    {
        id: "rev-4",
        source: "google",
        rating: 4,
        text: "Wunderbares Restaurant mit authentischer sardischer Küche. Die Fregola con Arselle war ein Traum. Die Terrasse bietet einen wunderschönen Blick auf die Piazza. Sehr empfehlenswert!",
        author: "Klaus M.",
        date: "Luglio 2025",
    },
    {
        id: "rev-5",
        source: "tripadvisor",
        rating: 5,
        text: "Le cocktail bar est fantastique! Le Sardinian Spritz est une révélation. L'ambiance est chaleureuse et le personnel très accueillant. Un bijou caché au cœur de Santa Teresa.",
        author: "Marie D.",
        date: "Agosto 2025",
    },
    {
        id: "rev-6",
        source: "google",
        rating: 5,
        text: "From the moment we walked in, we knew this place was special. The seadas dessert with corbezzolo honey was the perfect ending to an incredible meal. The wine selection is outstanding.",
        author: "James W.",
        date: "Settembre 2025",
    },
];
