export type LangCode = "it" | "en" | "de" | "pl" | "fr";

export interface Translations {
    // Nav
    nav: {
        home: string;
        menu: string;
        reviews: string;
        social: string;
        contact: string;
    };
    // Hero
    hero: {
        subtitle: string;
        ctaMenu: string;
        ctaBook: string;
        scroll: string;
        location: string;
    };
    // Menu Selector
    menuSelector: {
        explore: string;
        title: string;
        description: string;
        ristorante: string;
        ristoranteDesc: string;
        bar: string;
        barDesc: string;
    };
    // Interactive Menu
    interactiveMenu: {
        ristoranteLabel: string;
        barLabel: string;
        ristoranteTitle: string;
        barTitle: string;
        allergyNote: string;
    };
    // Reviews
    reviews: {
        label: string;
        title1: string;
        title2: string;
        reviewCount: string;
        cta: string;
        leaveReviewOn: string;
        googleReviews: string;
        orOnTripadvisor: string;
    };
    // Social
    social: {
        label: string;
        title: string;
    };
    // Contact
    contact: {
        label: string;
        title: string;
        address: string;
        phone: string;
        email: string;
        hours: string;
        hoursLunch: string;
        hoursDinner: string;
        hoursClosed: string;
        reservations: string;
        barOpen: string;
        mapNote: string;
        mondayToFriday: string;
        saturday: string;
        sunday: string;
    };
    // Footer
    footer: {
        description: string;
        navigation: string;
        contactTitle: string;
        newsletter: string;
        newsletterDesc: string;
        subscribe: string;
        emailPlaceholder: string;
        copyright: string;
        privacy: string;
        cookies: string;
        privacyContent: string;
        cookiesContent: string;
    };
    // Cookie Banner
    cookieBanner: {
        message: string;
        accept: string;
        decline: string;
        readMore: string;
    };
    // WhatsApp Widget
    whatsapp: {
        title: string;
        subtitle: string;
        placeholder: string;
        send: string;
    };
    // Inauguration Banner
    inauguration: {
        title: string;
        newManagement: string;
        date: string;
        countdown: string;
        days: string;
        hours: string;
        minutes: string;
        seconds: string;
        eventStarted: string;
    };
    // Menu item descriptions (keyed by item ID)
    menuDescriptions: Record<string, string>;
    // Menu category names (keyed by category ID)
    menuCategories: Record<string, string>;
}

const translations: Record<LangCode, Translations> = {
    it: {
        nav: {
            home: "Home",
            menu: "Menu",
            reviews: "Recensioni",
            social: "Social",
            contact: "Contatti",
        },
        hero: {
            subtitle: "Ristorante & Pizzeria — Cucina Sarda Autentica",
            ctaMenu: "Scopri il Menu",
            ctaBook: "Prenota un Tavolo",
            scroll: "Scroll",
            location: "Santa Teresa Gallura · Sardegna",
        },
        menuSelector: {
            explore: "Esplora",
            title: "La Nostra Offerta",
            description:
                "Scegli tra la nostra cucina tradizionale sarda o rilassati con un cocktail artigianale al nostro bar.",
            ristorante: "Ristorante",
            ristoranteDesc: "Cucina Tradizionale Sarda",
            bar: "Bar",
            barDesc: "Cocktail & Vini Sardi",
        },
        interactiveMenu: {
            ristoranteLabel: "Il Nostro Menu",
            barLabel: "La Carta dei Drinks",
            ristoranteTitle: "Sapori della Sardegna",
            barTitle: "Cocktail & Bevande",
            allergyNote:
                "Tutti i nostri piatti sono preparati con ingredienti freschi e di stagione. Informare il personale in caso di allergie o intolleranze alimentari.",
        },
        reviews: {
            label: "Recensioni",
            title1: "Cosa dicono di noi",
            title2: "i nostri ospiti?",
            reviewCount: "127+ opinioni",
            cta: "Hai cenato da noi? Ci farebbe piacere conoscere la tua esperienza!",
            leaveReviewOn: "Lascia una recensione su",
            googleReviews: "Google Reviews",
            orOnTripadvisor: "oppure su TripAdvisor",
        },
        social: {
            label: "Seguici",
            title: "Dalla Nostra Cucina al Tuo Feed",
        },
        contact: {
            label: "Trovarci",
            title: "Contatti & Posizione",
            address: "Indirizzo",
            phone: "Telefono",
            email: "Email",
            hours: "Orari di Apertura",
            hoursLunch: "Pranzo: 12:00–15:00",
            hoursDinner: "Cena: 18:30–23:00",
            hoursClosed: "Chiuso il Martedì",
            reservations: "Prenotazioni aperte dal Lunedì alla Domenica",
            barOpen: "🌿 Bar aperto tutto il giorno dalle 10:00",
            mapNote:
                "📍 Via Italia, 7 — nel cuore di Santa Teresa Gallura, Provincia della Gallura, Nord-Est Sardegna",
            mondayToFriday: "Lunedì — Venerdì",
            saturday: "Sabato",
            sunday: "Domenica",
        },
        footer: {
            description:
                "Un'oasi di sapori autentici nel cuore della Sardegna. Ristorante e pizzeria con terrazza sulla piazza principale.",
            navigation: "Navigazione",
            contactTitle: "Contatti",
            newsletter: "Newsletter",
            newsletterDesc:
                "Iscriviti per ricevere le nostre novità, eventi speciali e offerte esclusive.",
            subscribe: "Iscriviti",
            emailPlaceholder: "La tua email",
            copyright:
                "© 2026 Il Girasole — Santa Teresa Gallura. Tutti i diritti riservati.",
            privacy: "Privacy Policy",
            cookies: "Cookie Policy",
            privacyContent: "Informativa sulla Privacy (GDPR)\n\nIl Girasole si impegna a proteggere e rispettare la tua privacy in conformità con il Regolamento UE 2016/679 (GDPR).\n\n1. Dati raccolti\nRaccogliamo dati personali (nome, email, telefono) solo quando ci contatti volontariamente per prenotazioni o informazioni.\n\n2. Utilizzo dei dati\nUtilizziamo i tuoi dati esclusivamente per gestire prenotazioni, rispondere alle richieste e, previo consenso, inviare aggiornamenti o offerte speciali.\n\n3. Condivisione\nNon vendiamo né condividiamo i tuoi dati a terzi, salvo obblighi di legge.\n\n4. I tuoi diritti\nHai il diritto di accedere, correggere, cancellare o limitare il trattamento dei tuoi dati. Contattaci a info@ilgirasole-sardegna.it.\n\n5. Sicurezza\nAdottiamo misure adeguate per proteggere i tuoi dati da accessi non autorizzati.",
            cookiesContent: "Informativa sui Cookie\n\nQuesto sito utilizza i cookie per migliorare la tua esperienza di navigazione.\n\n1. Cosa sono i cookie?\nI cookie sono piccoli file di testo salvati sul tuo dispositivo durante la visita del sito.\n\n2. Quali cookie utilizziamo?\n- Cookie Tecnici: Necessari per il corretto funzionamento del sito. Non memorizzano dati identificativi e non possono essere disattivati.\n- Cookie Analitici: Aiutano a capire come i visitatori interagiscono con il sito raccogliendo informazioni in forma aggregata e anonima.\n\n3. Gestione dei cookie\nPuoi gestire le preferenze dai settaggi del tuo browser. Disattivare i cookie tecnici potrebbe compromettere alcune funzionalità.\n\nContinuando la navigazione, accetti l'utilizzo dei cookie in conformità con questa informativa.",
        },
        cookieBanner: {
            message: "Utilizziamo i cookie per offrirti la migliore esperienza sul nostro sito web.",
            accept: "Accetta",
            decline: "Rifiuta",
            readMore: "Leggi di più",
        },
        whatsapp: {
            title: "Chatta con noi",
            subtitle: "Rispondiamo il prima possibile",
            placeholder: "Scrivi un messaggio...",
            send: "Invia",
        },
        inauguration: {
            title: "Ti aspettiamo all'inaugurazione con la nuova gestione",
            newManagement: "Nuovo Locale!",
            date: "Sabato 21 marzo 2026 ore 18:00",
            countdown: "Mancano all'inaugurazione",
            days: "Giorni",
            hours: "Ore",
            minutes: "Minuti",
            seconds: "Secondi",
            eventStarted: "L'inaugurazione è iniziata! Vi aspettiamo!",
        },
        menuDescriptions: {
            "ant-1": "Pane tostato con pomodori freschi, basilico e olio extra vergine d'oliva della Sardegna",
            "ant-2": "Polpo tenero marinato con limone, capperi e olive taggiasche",
            "ant-3": "Burrata cremosa servita con prosciutto crudo stagionato 24 mesi e rucola selvatica",
            "ant-4": "Selezione di frutti di mare freschi con verdure croccanti e vinaigrette al limone",
            "ant-5": "Pane carasau tradizionale sardo con sugo di pomodoro, uovo e pecorino",
            "pri-1": "Spaghetti con vongole fresche, aglio, prezzemolo e un tocco di peperoncino",
            "pri-2": "Gnocchetti sardi con ragù di salsiccia, zafferano e pecorino sardo DOP",
            "pri-3": "Fregola sarda tostata con arselle, pomodorini e bottarga di muggine",
            "pri-4": "Ravioli fatti a mano ripieni di ricotta fresca e menta, con burro e salvia",
            "pri-5": "Risotto cremoso con gamberi, cozze, vongole e calamari del Mediterraneo",
            "sec-1": "Maialino sardo arrosto lentamente con mirto e erbe aromatiche della macchia mediterranea",
            "sec-2": "Branzino fresco alla griglia con patate al rosmarino e verdure di stagione",
            "sec-3": "Filetto di manzo alla griglia con riduzione al Cannonau e funghi porcini",
            "sec-4": "Aragosta freschissima con insalata di pomodori, cipolla rossa e sedano",
            "dol-1": "Dolce tradizionale sardo: pasta fritta ripiena di pecorino fresco, miele di corbezzolo",
            "dol-2": "Il nostro tiramisù classico con mascarpone, caffè espresso e cacao amaro",
            "dol-3": "Panna cotta vellutata aromatizzata al mirto sardo con frutti di bosco",
            "dol-4": "Cannoli croccanti ripieni di ricotta, pistacchi e gocce di cioccolato",
            "sus-1": "Selezione di salmone, tonno e branzino del Mediterraneo, tagliato al momento",
            "sus-2": "Due pezzi di riso delicatamente pressato con fette di salmone fresco e wasabi",
            "sus-3": "Rotolo con granchio, avocado, cetriolo e maionese giapponese, 8 pezzi",
            "sus-4": "Rotolo con gambero in tempura, avocado, tobiko e salsa teriyaki, 8 pezzi",
            "sus-5": "Due pezzi di tonno rosso su riso, con un tocco di salsa ponzu",
            "sus-6": "Fagioli di soia al vapore con sale marino e un tocco di peperoncino",
            "sus-7": "Gamberi e verdure in pastella leggera e croccante con salsa tentsuyu",
            "sus-8": "Ciotola di riso con selezione di pesce fresco, avocado, alghe e sesamo",
            "cock-1": "Il nostro Aperol Spritz con un twist sardo: mirto, prosecco e acqua frizzante",
            "cock-2": "Gin, Campari e Vermouth rosso, servito con scorza d'arancia",
            "cock-3": "Rum bianco, limoncello artigianale, menta fresca, zucchero di canna e lime",
            "cock-4": "Vodka, ginger beer, basilico, cetriolo e succo di lime fresco",
            "cock-5": "Prosecco con purée di pesche sarde fresche e un tocco di vaniglia",
            "vin-1": "Vino bianco fresco e minerale, perfetto con i piatti di mare",
            "vin-2": "Rosso corposo e strutturato, ideale con carni e formaggi stagionati",
            "vin-3": "Bollicine sarde eleganti e raffinate, metodo classico",
            "vin-4": "Vino dolce e aromatico, perfetto per accompagnare i dessert",
            "bir-1": "La birra sarda per eccellenza, non filtrata, dal gusto pieno e autentico",
            "bir-2": "Birra craft locale aromatizzata alle bacche di mirto sardo",
            "bir-3": "Lager italiana premium, doppio malto, dal sapore equilibrato e persistente",
            "ana-1": "Limoni freschi della Sardegna, menta e zucchero di canna",
            "ana-2": "Arance siciliane spremute al momento",
            "ana-3": "Acqua minerale frizzante italiana, 75cl",
            "ana-4": "Miscela italiana premium, tostatura media, servito nella tradizionale tazzina",
        },
        menuCategories: {
            "antipasti": "Antipasti",
            "primi": "Primi Piatti",
            "secondi": "Secondi Piatti",
            "dolci": "Dolci",
            "sushi": "Sushi",
            "cocktails": "Cocktail",
            "vini": "Vini",
            "birre": "Birre",
            "analcolici": "Analcolici",
        },
    },

    en: {
        nav: {
            home: "Home",
            menu: "Menu",
            reviews: "Reviews",
            social: "Social",
            contact: "Contact",
        },
        hero: {
            subtitle: "Restaurant & Pizzeria — Authentic Sardinian Cuisine",
            ctaMenu: "Explore the Menu",
            ctaBook: "Book a Table",
            scroll: "Scroll",
            location: "Santa Teresa Gallura · Sardinia",
        },
        menuSelector: {
            explore: "Explore",
            title: "Our Offer",
            description:
                "Choose from our traditional Sardinian cuisine or relax with an artisan cocktail at our bar.",
            ristorante: "Restaurant",
            ristoranteDesc: "Traditional Sardinian Cuisine",
            bar: "Bar",
            barDesc: "Cocktails & Sardinian Wines",
        },
        interactiveMenu: {
            ristoranteLabel: "Our Menu",
            barLabel: "Drinks Menu",
            ristoranteTitle: "Flavours of Sardinia",
            barTitle: "Cocktails & Beverages",
            allergyNote:
                "All our dishes are prepared with fresh, seasonal ingredients. Please inform staff of any allergies or intolerances.",
        },
        reviews: {
            label: "Reviews",
            title1: "What our guests",
            title2: "say about us?",
            reviewCount: "127+ reviews",
            cta: "Dined with us? We'd love to hear about your experience!",
            leaveReviewOn: "Leave a review on",
            googleReviews: "Google Reviews",
            orOnTripadvisor: "or on TripAdvisor",
        },
        social: {
            label: "Follow Us",
            title: "From Our Kitchen to Your Feed",
        },
        contact: {
            label: "Find Us",
            title: "Contact & Location",
            address: "Address",
            phone: "Phone",
            email: "Email",
            hours: "Opening Hours",
            hoursLunch: "Lunch: 12:00–15:00",
            hoursDinner: "Dinner: 18:30–23:00",
            hoursClosed: "Closed on Tuesdays",
            reservations: "Reservations open Monday to Sunday",
            barOpen: "🌿 Bar open all day from 10:00",
            mapNote:
                "📍 Via Italia, 7 — in the heart of Santa Teresa Gallura, Sardinia",
            mondayToFriday: "Monday — Friday",
            saturday: "Saturday",
            sunday: "Sunday",
        },
        footer: {
            description:
                "An oasis of authentic flavours in the heart of Sardinia. Restaurant and pizzeria with terrace on the main square.",
            navigation: "Navigation",
            contactTitle: "Contact",
            newsletter: "Newsletter",
            newsletterDesc:
                "Subscribe to receive our news, special events and exclusive offers.",
            subscribe: "Subscribe",
            emailPlaceholder: "Your email",
            copyright:
                "© 2026 Il Girasole — Santa Teresa Gallura. All rights reserved.",
            privacy: "Privacy Policy",
            cookies: "Cookie Policy",
            privacyContent: "Privacy Policy (GDPR)\n\nIl Girasole is committed to protecting and respecting your privacy in accordance with EU Regulation 2016/679 (GDPR).\n\n1. Data Collected\nWe collect personal data (name, email, phone) only when you voluntarily contact us for reservations or information.\n\n2. Use of Data\nWe use your data exclusively to manage reservations, respond to requests, and, with your consent, send updates or special offers.\n\n3. Sharing\nWe do not sell or share your data with third parties, except for legal obligations.\n\n4. Your Rights\nYou have the right to access, correct, delete, or limit the processing of your data. Contact us at info@ilgirasole-sardegna.it.\n\n5. Security\nWe adopt appropriate measures to protect your data against unauthorized access.",
            cookiesContent: "Cookie Policy\n\nThis site uses cookies to enhance your browsing experience.\n\n1. What are cookies?\nCookies are small text files saved on your device during your visit.\n\n2. Which cookies do we use?\n- Technical Cookies: Necessary for the proper functioning of the site. They do not store identifying data and cannot be disabled.\n- Analytical Cookies: Help us understand how visitors interact with the site by collecting information in an aggregated and anonymous form.\n\n3. Managing cookies\nYou can manage preferences from your browser settings. Disabling technical cookies may compromise some features.\n\nBy continuing to browse, you accept the use of cookies in accordance with this policy.",
        },
        cookieBanner: {
            message: "We use cookies to provide you with the best experience on our website.",
            accept: "Accept",
            decline: "Decline",
            readMore: "Read more",
        },
        whatsapp: {
            title: "Chat with us",
            subtitle: "We reply as soon as possible",
            placeholder: "Type a message...",
            send: "Send",
        },
        inauguration: {
            title: "We are waiting for you at the inauguration with the new management",
            newManagement: "New Venue!",
            date: "Saturday 21 March 2026 at 18:00",
            countdown: "Countdown to the inauguration",
            days: "Days",
            hours: "Hours",
            minutes: "Minutes",
            seconds: "Seconds",
            eventStarted: "The inauguration has started! We are waiting for you!",
        },
        menuDescriptions: {
            "ant-1": "Toasted bread with fresh tomatoes, basil and extra virgin olive oil from Sardinia",
            "ant-2": "Tender octopus marinated with lemon, capers and Taggiasca olives",
            "ant-3": "Creamy burrata served with 24-month aged prosciutto and wild rocket",
            "ant-4": "Selection of fresh seafood with crunchy vegetables and lemon vinaigrette",
            "ant-5": "Traditional Sardinian carasau bread with tomato sauce, egg and pecorino",
            "pri-1": "Spaghetti with fresh clams, garlic, parsley and a touch of chilli",
            "pri-2": "Sardinian gnocchetti with sausage ragù, saffron and Sardinian pecorino DOP",
            "pri-3": "Toasted Sardinian fregola with clams, cherry tomatoes and mullet bottarga",
            "pri-4": "Handmade ravioli filled with fresh ricotta and mint, with butter and sage",
            "pri-5": "Creamy risotto with prawns, mussels, clams and Mediterranean squid",
            "sec-1": "Sardinian suckling pig slow-roasted with myrtle and Mediterranean herb aromatics",
            "sec-2": "Fresh sea bass grilled with rosemary potatoes and seasonal vegetables",
            "sec-3": "Grilled beef fillet with Cannonau wine reduction and porcini mushrooms",
            "sec-4": "Fresh lobster with tomato, red onion and celery salad",
            "dol-1": "Traditional Sardinian sweet: fried pastry filled with fresh pecorino and corbezzolo honey",
            "dol-2": "Our classic tiramisù with mascarpone, espresso coffee and bitter cocoa",
            "dol-3": "Silky panna cotta flavoured with Sardinian myrtle and forest berries",
            "dol-4": "Crispy cannoli filled with ricotta, pistachios and chocolate chips",
            "sus-1": "Selection of salmon, tuna and Mediterranean sea bass, freshly sliced",
            "sus-2": "Two pieces of delicately pressed rice with fresh salmon slices and wasabi",
            "sus-3": "Roll with crab, avocado, cucumber and Japanese mayonnaise, 8 pieces",
            "sus-4": "Roll with tempura prawn, avocado, tobiko and teriyaki sauce, 8 pieces",
            "sus-5": "Two pieces of red tuna on rice, with a touch of ponzu sauce",
            "sus-6": "Steamed soybeans with sea salt and a touch of chilli",
            "sus-7": "Prawns and vegetables in light, crispy batter with tentsuyu sauce",
            "sus-8": "Rice bowl with selection of fresh fish, avocado, seaweed and sesame",
            "cock-1": "Our Aperol Spritz with a Sardinian twist: myrtle, prosecco and sparkling water",
            "cock-2": "Gin, Campari and red Vermouth, served with orange peel",
            "cock-3": "White rum, artisan limoncello, fresh mint, brown sugar and lime",
            "cock-4": "Vodka, ginger beer, basil, cucumber and fresh lime juice",
            "cock-5": "Prosecco with fresh Sardinian peach purée and a touch of vanilla",
            "vin-1": "Fresh and mineral white wine, perfect with seafood dishes",
            "vin-2": "Full-bodied and structured red, ideal with meats and aged cheeses",
            "vin-3": "Elegant and refined Sardinian sparkling wine, classic method",
            "vin-4": "Sweet and aromatic wine, perfect to accompany desserts",
            "bir-1": "The quintessential Sardinian beer, unfiltered, with a full and authentic taste",
            "bir-2": "Local craft beer flavoured with wild Sardinian myrtle berries",
            "bir-3": "Premium Italian lager, double malt, with a balanced and persistent flavour",
            "ana-1": "Fresh Sardinian lemons, mint and brown sugar",
            "ana-2": "Freshly squeezed Sicilian oranges",
            "ana-3": "Italian sparkling mineral water, 75cl",
            "ana-4": "Premium Italian blend, medium roast, served in the traditional cup",
        },
        menuCategories: {
            "antipasti": "Starters",
            "primi": "First Courses",
            "secondi": "Main Courses",
            "dolci": "Desserts",
            "sushi": "Sushi",
            "cocktails": "Cocktails",
            "vini": "Wines",
            "birre": "Beers",
            "analcolici": "Soft Drinks",
        },
    },

    de: {
        nav: {
            home: "Home",
            menu: "Speisekarte",
            reviews: "Bewertungen",
            social: "Social",
            contact: "Kontakt",
        },
        hero: {
            subtitle: "Restaurant & Pizzeria — Authentische sardische Küche",
            ctaMenu: "Speisekarte entdecken",
            ctaBook: "Tisch reservieren",
            scroll: "Scrollen",
            location: "Santa Teresa Gallura · Sardinien",
        },
        menuSelector: {
            explore: "Entdecken",
            title: "Unser Angebot",
            description:
                "Wählen Sie zwischen unserer traditionellen sardischen Küche oder entspannen Sie sich mit einem handgefertigten Cocktail an unserer Bar.",
            ristorante: "Restaurant",
            ristoranteDesc: "Traditionelle sardische Küche",
            bar: "Bar",
            barDesc: "Cocktails & sardische Weine",
        },
        interactiveMenu: {
            ristoranteLabel: "Unsere Speisekarte",
            barLabel: "Getränkekarte",
            ristoranteTitle: "Geschmack Sardiniens",
            barTitle: "Cocktails & Getränke",
            allergyNote:
                "Alle unsere Gerichte werden mit frischen, saisonalen Zutaten zubereitet. Bitte informieren Sie das Personal über Allergien oder Unverträglichkeiten.",
        },
        reviews: {
            label: "Bewertungen",
            title1: "Was unsere Gäste",
            title2: "über uns sagen?",
            reviewCount: "127+ Bewertungen",
            cta: "Bei uns gespeist? Wir freuen uns über Ihr Feedback!",
            leaveReviewOn: "Bewertung hinterlassen auf",
            googleReviews: "Google Reviews",
            orOnTripadvisor: "oder auf TripAdvisor",
        },
        social: {
            label: "Folge uns",
            title: "Aus unserer Küche in Ihren Feed",
        },
        contact: {
            label: "Finden Sie uns",
            title: "Kontakt & Standort",
            address: "Adresse",
            phone: "Telefon",
            email: "E-Mail",
            hours: "Öffnungszeiten",
            hoursLunch: "Mittagessen: 12:00–15:00",
            hoursDinner: "Abendessen: 18:30–23:00",
            hoursClosed: "Dienstag geschlossen",
            reservations: "Reservierungen Montag bis Sonntag",
            barOpen: "🌿 Bar ganztägig geöffnet ab 10:00",
            mapNote:
                "📍 Via Italia, 7 — im Herzen von Santa Teresa Gallura, Sardinien",
            mondayToFriday: "Montag — Freitag",
            saturday: "Samstag",
            sunday: "Sonntag",
        },
        footer: {
            description:
                "Eine Oase authentischer Aromen im Herzen Sardiniens. Restaurant und Pizzeria mit Terrasse am Hauptplatz.",
            navigation: "Navigation",
            contactTitle: "Kontakt",
            newsletter: "Newsletter",
            newsletterDesc:
                "Abonnieren Sie unseren Newsletter für Neuigkeiten, Events und exklusive Angebote.",
            subscribe: "Abonnieren",
            emailPlaceholder: "Ihre E-Mail",
            copyright:
                "© 2026 Il Girasole — Santa Teresa Gallura. Alle Rechte vorbehalten.",
            privacy: "Datenschutz",
            cookies: "Cookie-Richtlinie",
            privacyContent: "Datenschutzerklärung (DSGVO)\n\nIl Girasole verpflichtet sich, Ihre Privatsphäre in Übereinstimmung mit der EU-Verordnung 2016/679 (DSGVO) zu schützen.\n\n1. Erhobene Daten\nWir erfassen personenbezogene Daten (Name, E-Mail, Telefon) nur, wenn Sie uns freiwillig für Reservierungen oder Informationen kontaktieren.\n\n2. Nutzung der Daten\nWir verwenden Ihre Daten ausschließlich zur Verwaltung von Reservierungen, Beantwortung von Anfragen und, mit Ihrer Zustimmung, für Updates oder Sonderangebote.\n\n3. Weitergabe\nWir verkaufen oder teilen Ihre Daten nicht mit Dritten, außer bei gesetzlichen Verpflichtungen.\n\n4. Ihre Rechte\nSie haben das Recht auf Auskunft, Berichtigung, Löschung oder Einschränkung der Verarbeitung Ihrer Daten. Kontaktieren Sie uns unter info@ilgirasole-sardegna.it.\n\n5. Sicherheit\nWir ergreifen angemessene Maßnahmen, um Ihre Daten vor unbefugtem Zugriff zu schützen.",
            cookiesContent: "Cookie-Richtlinie\n\nDiese Seite verwendet Cookies, um Ihr Surferlebnis zu verbessern.\n\n1. Was sind Cookies?\nCookies sind kleine Textdateien, die während Ihres Besuchs auf Ihrem Gerät gespeichert werden.\n\n2. Welche Cookies verwenden wir?\n- Technische Cookies: Notwendig für das ordnungsgemäße Funktionieren der Seite. Sie speichern keine identifizierenden Daten und können nicht deaktiviert werden.\n- Analytische Cookies: Helfen uns zu verstehen, wie Besucher mit der Website interagieren, indem Informationen in aggregierter und anonymer Form gesammelt werden.\n\n3. Cookie-Verwaltung\nSie können Einstellungen in Ihrem Browser verwalten. Die Deaktivierung technischer Cookies kann einige Funktionen beeinträchtigen.\n\nDurch die weitere Nutzung der Seite stimmen Sie der Verwendung von Cookies gemäß dieser Richtlinie zu.",
        },
        cookieBanner: {
            message: "Wir verwenden Cookies, um Ihnen das beste Erlebnis auf unserer Website zu bieten.",
            accept: "Akzeptieren",
            decline: "Ablehnen",
            readMore: "Mehr erfahren",
        },
        whatsapp: {
            title: "Mit uns chatten",
            subtitle: "Wir antworten so schnell wie möglich",
            placeholder: "Schreib eine Nachricht...",
            send: "Senden",
        },
        inauguration: {
            title: "Wir erwarten Sie zur Eröffnung unter neuer Leitung",
            newManagement: "Neues Lokal!",
            date: "Samstag, 21. März 2026 um 18:00 Uhr",
            countdown: "Countdown zur Eröffnung",
            days: "Tage",
            hours: "Stunden",
            minutes: "Minuten",
            seconds: "Sekunden",
            eventStarted: "Die Eröffnung hat begonnen! Wir erwarten Sie!",
        },
        menuDescriptions: {
            "ant-1": "Geröstetes Brot mit frischen Tomaten, Basilikum und extra nativem Olivenöl aus Sardinien",
            "ant-2": "Zarter Oktopus mariniert mit Zitrone, Kapern und Taggiasca-Oliven",
            "ant-3": "Cremige Burrata serviert mit 24 Monate gereiftem Prosciutto und wildem Rucola",
            "ant-4": "Auswahl frischer Meeresfrüchte mit knackigem Gemüse und Zitronenvinaigrette",
            "ant-5": "Traditionelles sardisches Carasau-Brot mit Tomatensauce, Ei und Pecorino",
            "pri-1": "Spaghetti mit frischen Venusmuscheln, Knoblauch, Petersilie und einem Hauch Chili",
            "pri-2": "Sardische Gnocchetti mit Wurstragout, Safran und sardischem Pecorino DOP",
            "pri-3": "Geröstete sardische Fregola mit Muscheln, Kirschtomaten und Meeräschen-Bottarga",
            "pri-4": "Handgemachte Ravioli gefüllt mit frischem Ricotta und Minze, mit Butter und Salbei",
            "pri-5": "Cremiges Risotto mit Garnelen, Miesmuscheln, Venusmuscheln und Mittelmeer-Tintenfisch",
            "sec-1": "Sardisches Spanferkel langsam gebraten mit Myrte und Kräutern der mediterranen Macchia",
            "sec-2": "Frischer gegrillter Wolfsbarsch mit Rosmarinkartoffeln und saisonalem Gemüse",
            "sec-3": "Gegrilltes Rinderfilet mit Cannonau-Weinreduktion und Steinpilzen",
            "sec-4": "Frischeste Languste mit Tomaten-, Zwiebel- und Selleriesalat",
            "dol-1": "Traditionelle sardische Süßspeise: frittierter Teig gefüllt mit frischem Pecorino, Corbezzolo-Honig",
            "dol-2": "Unser klassisches Tiramisù mit Mascarpone, Espresso und bitterem Kakao",
            "dol-3": "Samtige Panna Cotta aromatisiert mit sardischer Myrte und Waldbeeren",
            "dol-4": "Knusprige Cannoli gefüllt mit Ricotta, Pistazien und Schokoladenstückchen",
            "sus-1": "Auswahl von Lachs, Thunfisch und Mittelmeer-Wolfsbarsch, frisch geschnitten",
            "sus-2": "Zwei Stück zart gepresster Reis mit frischen Lachsscheiben und Wasabi",
            "sus-3": "Rolle mit Krabbe, Avocado, Gurke und japanischer Mayonnaise, 8 Stück",
            "sus-4": "Rolle mit Tempura-Garnele, Avocado, Tobiko und Teriyaki-Sauce, 8 Stück",
            "sus-5": "Zwei Stück roter Thunfisch auf Reis, mit einem Hauch Ponzu-Sauce",
            "sus-6": "Gedämpfte Sojabohnen mit Meersalz und einem Hauch Chili",
            "sus-7": "Garnelen und Gemüse in leichtem, knusprigem Teig mit Tentsuyu-Sauce",
            "sus-8": "Reisschüssel mit Auswahl frischer Fische, Avocado, Algen und Sesam",
            "cock-1": "Unser Aperol Spritz mit sardischem Twist: Myrte, Prosecco und Sprudelwasser",
            "cock-2": "Gin, Campari und roter Wermut, serviert mit Orangenschale",
            "cock-3": "Weißer Rum, handgemachter Limoncello, frische Minze, Rohrzucker und Limette",
            "cock-4": "Vodka, Ginger Beer, Basilikum, Gurke und frischer Limettensaft",
            "cock-5": "Prosecco mit frischem sardischem Pfirsichpüree und einem Hauch Vanille",
            "vin-1": "Frischer und mineralischer Weißwein, perfekt zu Meeresfrüchten",
            "vin-2": "Vollmundiger und strukturierter Rotwein, ideal zu Fleisch und gereiftem Käse",
            "vin-3": "Eleganter und raffinierter sardischer Schaumwein, klassische Methode",
            "vin-4": "Süßer und aromatischer Wein, perfekt als Dessertbegleitung",
            "bir-1": "Das sardische Bier schlechthin, ungefiltert, mit vollem und authentischem Geschmack",
            "bir-2": "Lokales Craft-Bier aromatisiert mit wilden sardischen Myrtebeeren",
            "bir-3": "Premium italienische Lager, Doppelmalz, mit ausgewogenem und anhaltendem Geschmack",
            "ana-1": "Frische sardische Zitronen, Minze und Rohrzucker",
            "ana-2": "Frisch gepresste sizilianische Orangen",
            "ana-3": "Italienisches Sprudelwasser, 75cl",
            "ana-4": "Premium italienische Mischung, mittlere Röstung, serviert in der traditionellen Tasse",
        },
        menuCategories: {
            "antipasti": "Vorspeisen",
            "primi": "Erste Gänge",
            "secondi": "Hauptgerichte",
            "dolci": "Desserts",
            "sushi": "Sushi",
            "cocktails": "Cocktails",
            "vini": "Weine",
            "birre": "Biere",
            "analcolici": "Alkoholfrei",
        },
    },

    pl: {
        nav: {
            home: "Strona główna",
            menu: "Menu",
            reviews: "Opinie",
            social: "Social",
            contact: "Kontakt",
        },
        hero: {
            subtitle: "Restauracja i Pizzeria — Autentyczna Kuchnia Sardyńska",
            ctaMenu: "Zobacz Menu",
            ctaBook: "Zarezerwuj Stolik",
            scroll: "Przewiń",
            location: "Santa Teresa Gallura · Sardynia",
        },
        menuSelector: {
            explore: "Odkrywaj",
            title: "Nasza Oferta",
            description:
                "Wybierz spośród naszej tradycyjnej kuchni sardyńskiej lub zrelaksuj się z autorskim koktajlem w naszym barze.",
            ristorante: "Restauracja",
            ristoranteDesc: "Tradycyjna Kuchnia Sardyńska",
            bar: "Bar",
            barDesc: "Koktajle i Wina Sardyńskie",
        },
        interactiveMenu: {
            ristoranteLabel: "Nasze Menu",
            barLabel: "Karta Drinków",
            ristoranteTitle: "Smaki Sardynii",
            barTitle: "Koktajle i Napoje",
            allergyNote:
                "Wszystkie nasze dania są przygotowywane ze świeżych, sezonowych składników. Prosimy o informowanie personelu o alergiach lub nietolerancjach pokarmowych.",
        },
        reviews: {
            label: "Opinie",
            title1: "Co mówią o nas",
            title2: "nasi goście?",
            reviewCount: "127+ opinii",
            cta: "Jadłeś u nas? Chętnie poznamy Twoją opinię!",
            leaveReviewOn: "Zostaw opinię na",
            googleReviews: "Google Reviews",
            orOnTripadvisor: "lub na TripAdvisor",
        },
        social: {
            label: "Obserwuj nas",
            title: "Z Naszej Kuchni do Twojego Feedu",
        },
        contact: {
            label: "Znajdź nas",
            title: "Kontakt i Lokalizacja",
            address: "Adres",
            phone: "Telefon",
            email: "Email",
            hours: "Godziny Otwarcia",
            hoursLunch: "Lunch: 12:00–15:00",
            hoursDinner: "Kolacja: 18:30–23:00",
            hoursClosed: "Zamknięte we Wtorki",
            reservations: "Rezerwacje otwarte od Poniedziałku do Niedzieli",
            barOpen: "🌿 Bar otwarty cały dzień od 10:00",
            mapNote:
                "📍 Via Italia, 7 — w sercu Santa Teresa Gallura, Sardynia",
            mondayToFriday: "Poniedziałek — Piątek",
            saturday: "Sobota",
            sunday: "Niedziela",
        },
        footer: {
            description:
                "Oaza autentycznych smaków w sercu Sardynii. Restauracja i pizzeria z tarasem na głównym placu.",
            navigation: "Nawigacja",
            contactTitle: "Kontakt",
            newsletter: "Newsletter",
            newsletterDesc:
                "Zapisz się, aby otrzymywać nasze nowości, wydarzenia specjalne i ekskluzywne oferty.",
            subscribe: "Zapisz się",
            emailPlaceholder: "Twój email",
            copyright:
                "© 2026 Il Girasole — Santa Teresa Gallura. Wszelkie prawa zastrzeżone.",
            privacy: "Polityka Prywatności",
            cookies: "Polityka Cookies",
            privacyContent: "Polityka Prywatności (RODO)\n\nIl Girasole zobowiązuje się do ochrony i poszanowania Twojej prywatności zgodnie z Rozporządzeniem UE 2016/679 (RODO).\n\n1. Gromadzone Dane\nZbieramy dane osobowe (imię, email, telefon) tylko wtedy, gdy dobrowolnie kontaktujesz się z nami w celu rezerwacji lub obsługi zapytań.\n\n2. Wykorzystanie Danych\nUżywamy Twoich danych wyłącznie do zarządzania rezerwacjami, odpowiadania na zapytania oraz, za Twoją zgodą, wysyłania aktualności i ofert specjalnych.\n\n3. Udostępnianie\nNie sprzedajemy ani nie udostępniamy Twoich danych stronom trzecim, z wyjątkiem obowiązków prawnych.\n\n4. Twoje Prawa\nMasz prawo do dostępu, poprawy, usunięcia lub ograniczenia przetwarzania swoich danych. Skontaktuj się z nami pod info@ilgirasole-sardegna.it.\n\n5. Bezpieczeństwo\nStosujemy odpowiednie środki, aby chronić Twoje dane przed nieautoryzowanym dostępem.",
            cookiesContent: "Polityka Cookies\n\nTa strona używa plików cookie, aby poprawić Twoje doświadczenia z przeglądania.\n\n1. Czym są cookies?\nCookies to małe pliki tekstowe zapisywane na Twoim urządzeniu podczas wizyty.\n\n2. Jakich cookies używamy?\n- Cookies Techniczne: Niezbędne do prawidłowego funkcjonowania strony. Nie przechowują danych identyfikacyjnych i nie można ich wyłączyć.\n- Cookies Analityczne: Pomagają zrozumieć, w jaki sposób odwiedzający korzystają ze strony, zbierając zagregowane i anonimowe informacje.\n\n3. Zarządzanie cookies\nMożesz zarządzać preferencjami z poziomu ustawień przeglądarki. Wyłączenie technicznych cookies może wpłynąć na niektóre ustawienia strony.\n\nKontynuując przeglądanie, akceptujesz użycie cookies zgodnie z niniejszą polityką.",
        },
        cookieBanner: {
            message: "Używamy plików cookie, aby zapewnić Ci najlepsze wrażenia na naszej stronie.",
            accept: "Akceptuj",
            decline: "Odrzuć",
            readMore: "Czytaj więcej",
        },
        whatsapp: {
            title: "Czatuj z nami",
            subtitle: "Odpowiadamy tak szybko, jak to możliwe",
            placeholder: "Wpisz wiadomość...",
            send: "Wyślij",
        },
        inauguration: {
            title: "Zapraszamy na inaugurację pod nowym zarządem",
            newManagement: "Nowy Lokal!",
            date: "Sobota 21 marca 2026 godzina 18:00",
            countdown: "Do inauguracji pozostało",
            days: "Dni",
            hours: "Godziny",
            minutes: "Minuty",
            seconds: "Sekundy",
            eventStarted: "Inauguracja się rozpoczęła! Zapraszamy!",
        },
        menuDescriptions: {
            "ant-1": "Tostowy chleb ze świeżymi pomidorami, bazylią i oliwą extra virgin z Sardynii",
            "ant-2": "Delikatna ośmiornica marynowana z cytryną, kaparami i oliwkami Taggiasca",
            "ant-3": "Kremowa burrata podawana z szynką parmeńską dojrzewającą 24 miesiące i dziką rukolą",
            "ant-4": "Wybór świeżych owoców morza z chrupiącymi warzywami i vinaigrette cytrynowym",
            "ant-5": "Tradycyjny sardyński chleb carasau z sosem pomidorowym, jajkiem i pecorino",
            "pri-1": "Spaghetti ze świeżymi małżami, czosnkiem, pietruszką i odrobiną chilli",
            "pri-2": "Sardyńskie gnocchetti z ragù z kiełbasy, szafranem i sardyńskim pecorino DOP",
            "pri-3": "Prażona sardyńska fregola z małżami, pomidorkami cherry i bottargą z muleta",
            "pri-4": "Ręcznie robione ravioli nadziewane świeżą ricottą i miętą, z masłem i szałwią",
            "pri-5": "Kremowe risotto z krewetkami, małżami, vongole i kalmarem śródziemnomorskim",
            "sec-1": "Sardyński prosiak wolno pieczony z mirtem i ziołami aromatycznymi śródziemnomorskiego maquis",
            "sec-2": "Świeży okoń morski z grilla z ziemniakami rozmarynowymi i warzywami sezonowymi",
            "sec-3": "Grillowany filet wołowy z redukcją z wina Cannonau i grzybami borowikami",
            "sec-4": "Najświeższy homar z sałatką z pomidorów, czerwonej cebuli i selera",
            "dol-1": "Tradycyjny sardyński deser: smażone ciasto nadziewane świeżym pecorino, miodem corbezzolo",
            "dol-2": "Nasze klasyczne tiramisù z mascarpone, espresso i gorzkimi kakao",
            "dol-3": "Aksamitna panna cotta o aromacie sardyńskiego mirtu z owocami leśnymi",
            "dol-4": "Chrupiące cannoli nadziewane ricottą, pistacjami i kawałkami czekolady",
            "sus-1": "Wybór łososia, tuńczyka i okonia morskiego, świeżo krojony",
            "sus-2": "Dwa kawałki delikatnie prasowanego ryżu z plastrami świeżego łososia i wasabi",
            "sus-3": "Rolka z krabem, awokado, ogórkiem i japońskim majonezem, 8 sztuk",
            "sus-4": "Rolka z krewetką w tempurze, awokado, tobiko i sosem teriyaki, 8 sztuk",
            "sus-5": "Dwa kawałki czerwonego tuńczyka na ryżu, z nutą sosu ponzu",
            "sus-6": "Gotowane na parze sojowe fasolki z solą morską i odrobiną chilli",
            "sus-7": "Krewetki i warzywa w lekim, chrupiącym cieście z sosem tentsuyu",
            "sus-8": "Miska ryżu z wyborem świeżych ryb, awokado, wodorostami i sezamem",
            "cock-1": "Nasz Aperol Spritz z sardyńskim twistem: mirt, prosecco i woda gazowana",
            "cock-2": "Gin, Campari i czerwony Vermouth, podawany ze skórką pomarańczy",
            "cock-3": "Biały rum, rzemieślniczy limoncello, świeża mięta, cukier trzcinowy i limonka",
            "cock-4": "Wódka, piwo imbirowe, bazylia, ogórek i świeży sok z limonki",
            "cock-5": "Prosecco z purée ze świeżych sardyńskich brzoskwiń i nutą wanilii",
            "vin-1": "Świeże i mineralne białe wino, idealne do dań z owoców morza",
            "vin-2": "Pełne i strukturalne czerwone wino, idealne do mięs i dojrzałych serów",
            "vin-3": "Eleganckie i wyrafinowane sardyńskie wino musujące, metoda klasyczna",
            "vin-4": "Słodkie i aromatyczne wino, idealne do towarzyszenia deserom",
            "bir-1": "Sardyńskie piwo w najczystszej formie, niefiltrowane, o pełnym i autentycznym smaku",
            "bir-2": "Lokalne piwo rzemieślnicze o aromacie dzikich sardyńskich jagód mirtu",
            "bir-3": "Włoski lager premium, podwójny słód, o zrównoważonym i trwałym smaku",
            "ana-1": "Świeże sardyńskie cytryny, mięta i cukier trzcinowy",
            "ana-2": "Świeżo wyciskane sycylijskie pomarańcze",
            "ana-3": "Włoska gazowana woda mineralna, 75cl",
            "ana-4": "Włoska mieszanka premium, średnie palenie, podawana w tradycyjnej filiżance",
        },
        menuCategories: {
            "antipasti": "Przystawki",
            "primi": "Pierwsze Dania",
            "secondi": "Dania Główne",
            "dolci": "Desery",
            "sushi": "Sushi",
            "cocktails": "Koktajle",
            "vini": "Wina",
            "birre": "Piwa",
            "analcolici": "Napoje Bezalkoholowe",
        },
    },

    fr: {
        nav: {
            home: "Accueil",
            menu: "Menu",
            reviews: "Avis",
            social: "Social",
            contact: "Contact",
        },
        hero: {
            subtitle: "Restaurant & Pizzeria — Cuisine Sarde Authentique",
            ctaMenu: "Découvrir le Menu",
            ctaBook: "Réserver une Table",
            scroll: "Défiler",
            location: "Santa Teresa Gallura · Sardaigne",
        },
        menuSelector: {
            explore: "Explorer",
            title: "Notre Offre",
            description:
                "Choisissez parmi notre cuisine sarde traditionnelle ou détendez-vous avec un cocktail artisanal à notre bar.",
            ristorante: "Restaurant",
            ristoranteDesc: "Cuisine Sarde Traditionnelle",
            bar: "Bar",
            barDesc: "Cocktails & Vins Sardes",
        },
        interactiveMenu: {
            ristoranteLabel: "Notre Menu",
            barLabel: "Carte des Boissons",
            ristoranteTitle: "Saveurs de Sardaigne",
            barTitle: "Cocktails & Boissons",
            allergyNote:
                "Tous nos plats sont préparés avec des ingrédients frais et de saison. Veuillez informer le personnel de toute allergie ou intolérance.",
        },
        reviews: {
            label: "Avis",
            title1: "Ce que disent",
            title2: "nos clients?",
            reviewCount: "127+ avis",
            cta: "Vous avez dîné chez nous? Nous serions ravis de connaître votre expérience!",
            leaveReviewOn: "Laissez un avis sur",
            googleReviews: "Google Reviews",
            orOnTripadvisor: "ou sur TripAdvisor",
        },
        social: {
            label: "Suivez-nous",
            title: "De Notre Cuisine à Votre Feed",
        },
        contact: {
            label: "Nous trouver",
            title: "Contact & Emplacement",
            address: "Adresse",
            phone: "Téléphone",
            email: "Email",
            hours: "Heures d'ouverture",
            hoursLunch: "Déjeuner: 12h00–15h00",
            hoursDinner: "Dîner: 18h30–23h00",
            hoursClosed: "Fermé le Mardi",
            reservations: "Réservations ouvertes du Lundi au Dimanche",
            barOpen: "🌿 Bar ouvert toute la journée dès 10h00",
            mapNote:
                "📍 Via Italia, 7 — au cœur de Santa Teresa Gallura, Sardaigne",
            mondayToFriday: "Lundi — Vendredi",
            saturday: "Samedi",
            sunday: "Dimanche",
        },
        footer: {
            description:
                "Une oasis de saveurs authentiques au cœur de la Sardaigne. Restaurant et pizzeria avec terrasse sur la place principale.",
            navigation: "Navigation",
            contactTitle: "Contact",
            newsletter: "Newsletter",
            newsletterDesc:
                "Inscrivez-vous pour recevoir nos actualités, événements spéciaux et offres exclusives.",
            subscribe: "S'inscrire",
            emailPlaceholder: "Votre email",
            copyright:
                "© 2026 Il Girasole — Santa Teresa Gallura. Tous droits réservés.",
            privacy: "Politique de Confidentialité",
            cookies: "Politique de Cookies",
            privacyContent: "Politique de Confidentialité (RGPD)\n\nIl Girasole s'engage à protéger et à respecter votre vie privée conformément au Règlement de l'UE 2016/679 (RGPD).\n\n1. Données collectées\nNous collectons vos données personnelles (nom, email, téléphone) uniquement lorsque vous nous contactez volontairement pour des réservations ou informations.\n\n2. Utilisation des données\nNous utilisons vos données exclusivement pour gérer les réservations, répondre aux demandes et, avec votre consentement, envoyer des offres spéciales.\n\n3. Partage\nNous ne vendons ni ne partageons vos données avec des tiers, sauf obligation légale.\n\n4. Vos Droits\nVous avez le droit d'accéder, modifier, supprimer ou limiter le traitement de vos données. Contactez-nous à info@ilgirasole-sardegna.it.\n\n5. Sécurité\nNous adoptons les mesures appropriées pour protéger vos données contre les accès non autorisés.",
            cookiesContent: "Politique des Cookies\n\nCe site utilise des cookies pour améliorer votre expérience de navigation.\n\n1. Que sont les cookies ?\nLes cookies sont de petits fichiers texte sauvegardés sur votre appareil lors de votre visite.\n\n2. Quels cookies utilisons-nous ?\n- Cookies Techniques : Nécessaires au bon fonctionnement du site. Ils ne stockent pas de données d'identification et ne peuvent être désactivés.\n- Cookies Analytiques : Nous aident à comprendre l'interaction des visiteurs avec le site en récoltant des informations sous forme agrégée et anonyme.\n\n3. Gérer les cookies\nVous pouvez gérer vos préférences via les paramètres de votre navigateur. La désactivation des cookies techniques peut compromettre certaines fonctionnalités.\n\nEn continuant de naviguer, vous acceptez l'utilisation des cookies conformément à cette politique.",
        },
        cookieBanner: {
            message: "Nous utilisons des cookies pour vous offrir la meilleure expérience sur notre site.",
            accept: "Accepter",
            decline: "Refuser",
            readMore: "En savoir plus",
        },
        whatsapp: {
            title: "Discutez avec nous",
            subtitle: "Nous répondons dès que possible",
            placeholder: "Écrivez un message...",
            send: "Envoyer",
        },
        inauguration: {
            title: "Nous vous attendons à l'inauguration sous nouvelle direction",
            newManagement: "Nouveau Local !",
            date: "Samedi 21 mars 2026 à 18h00",
            countdown: "Compte à rebours jusqu'à l'inauguration",
            days: "Jours",
            hours: "Heures",
            minutes: "Minutes",
            seconds: "Secondes",
            eventStarted: "L'inauguration a commencé ! Nous vous attendons !",
        },
        menuDescriptions: {
            "ant-1": "Pain grillé avec tomates fraîches, basilic et huile d'olive extra vierge de Sardaigne",
            "ant-2": "Poulpe tendre mariné au citron, câpres et olives Taggiasca",
            "ant-3": "Burrata crémeuse servie avec prosciutto affiné 24 mois et roquette sauvage",
            "ant-4": "Sélection de fruits de mer frais avec légumes croquants et vinaigrette au citron",
            "ant-5": "Pain carasau traditionnel sarde avec sauce tomate, œuf et pecorino",
            "pri-1": "Spaghetti aux palourdes fraîches, ail, persil et une pointe de piment",
            "pri-2": "Gnocchetti sardes avec ragù de saucisse, safran et pecorino sarde DOP",
            "pri-3": "Fregola sarde grillée avec palourdes, tomates cerises et boutargue de mulet",
            "pri-4": "Ravioli faits main farcis à la ricotta fraîche et à la menthe, au beurre et à la sauge",
            "pri-5": "Risotto crémeux aux crevettes, moules, palourdes et calamars méditerranéens",
            "sec-1": "Cochon de lait sarde rôti lentement avec myrte et herbes aromatiques du maquis méditerranéen",
            "sec-2": "Bar frais grillé avec pommes de terre au romarin et légumes de saison",
            "sec-3": "Filet de bœuf grillé avec réduction au Cannonau et champignons porcini",
            "sec-4": "Langouste fraîchissime avec salade de tomates, oignon rouge et céleri",
            "dol-1": "Dessert traditionnel sarde: pâte frite farcie de pecorino frais, miel de corbezzolo",
            "dol-2": "Notre tiramisù classique avec mascarpone, café espresso et cacao amer",
            "dol-3": "Panna cotta veloutée aromatisée au myrte sarde avec fruits des bois",
            "dol-4": "Cannoli croustillants farcis à la ricotta, pistaches et pépites de chocolat",
            "sus-1": "Sélection de saumon, thon et bar méditerranéen, fraîchement tranché",
            "sus-2": "Deux pièces de riz délicatement pressé avec tranches de saumon frais et wasabi",
            "sus-3": "Rouleau avec crabe, avocat, concombre et mayonnaise japonaise, 8 pièces",
            "sus-4": "Rouleau avec crevette tempura, avocat, tobiko et sauce teriyaki, 8 pièces",
            "sus-5": "Deux pièces de thon rouge sur riz, avec une touche de sauce ponzu",
            "sus-6": "Fèves de soja à la vapeur avec sel marin et une touche de piment",
            "sus-7": "Crevettes et légumes en pâte légère et croustillante avec sauce tentsuyu",
            "sus-8": "Bol de riz avec sélection de poissons frais, avocat, algues et sésame",
            "cock-1": "Notre Aperol Spritz avec une touche sarde: myrte, prosecco et eau pétillante",
            "cock-2": "Gin, Campari et Vermouth rouge, servi avec zeste d'orange",
            "cock-3": "Rhum blanc, limoncello artisanal, menthe fraîche, sucre de canne et citron vert",
            "cock-4": "Vodka, ginger beer, basilic, concombre et jus de citron vert frais",
            "cock-5": "Prosecco avec purée de pêches sardes fraîches et une touche de vanille",
            "vin-1": "Vin blanc frais et minéral, parfait avec les plats de la mer",
            "vin-2": "Rouge corsé et structuré, idéal avec viandes et fromages affinés",
            "vin-3": "Bulles sardes élégantes et raffinées, méthode classique",
            "vin-4": "Vin doux et aromatique, parfait pour accompagner les desserts",
            "bir-1": "La bière sarde par excellence, non filtrée, au goût plein et authentique",
            "bir-2": "Bière artisanale locale aromatisée aux baies de myrte sarde sauvage",
            "bir-3": "Lager italienne premium, double malt, au goût équilibré et persistant",
            "ana-1": "Citrons frais de Sardaigne, menthe et sucre de canne",
            "ana-2": "Oranges siciliennes pressées à la minute",
            "ana-3": "Eau minérale pétillante italienne, 75cl",
            "ana-4": "Mélange italien premium, torréfaction moyenne, servi dans la tasse traditionnelle",
        },
        menuCategories: {
            "antipasti": "Entrées",
            "primi": "Premiers Plats",
            "secondi": "Plats Principaux",
            "dolci": "Desserts",
            "sushi": "Sushi",
            "cocktails": "Cocktails",
            "vini": "Vins",
            "birre": "Bières",
            "analcolici": "Sans Alcool",
        },
    },
};

export default translations;
