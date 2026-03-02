export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  icon: string; // emoji or icon identifier
  isNew?: boolean;
}

export interface MenuCategory {
  id: string;
  name: string;
  items: MenuItem[];
  isNew?: boolean;
}

export interface MenuData {
  ristorante: MenuCategory[];
  bar: MenuCategory[];
}

export const menuData: MenuData = {
  ristorante: [
    {
      id: "antipasti",
      name: "Antipasti",
      items: [
        {
          id: "ant-1",
          name: "Bruschetta al Pomodoro",
          description: "Pane tostato con pomodori freschi, basilico e olio extra vergine d'oliva della Sardegna",
          price: "€12",
          icon: "🍅",
        },
        {
          id: "ant-2",
          name: "Carpaccio di Polpo",
          description: "Polpo tenero marinato con limone, capperi e olive taggiasche",
          price: "€18",
          icon: "🐙",
        },
        {
          id: "ant-3",
          name: "Burrata con Prosciutto",
          description: "Burrata cremosa servita con prosciutto crudo stagionato 24 mesi e rucola selvatica",
          price: "€16",
          icon: "🧀",
        },
        {
          id: "ant-4",
          name: "Insalata di Mare",
          description: "Selezione di frutti di mare freschi con verdure croccanti e vinaigrette al limone",
          price: "€20",
          icon: "🦐",
        },
        {
          id: "ant-5",
          name: "Pane Frattau",
          description: "Pane carasau tradizionale sardo con sugo di pomodoro, uovo e pecorino",
          price: "€14",
          icon: "🍞",
        },
      ],
    },
    {
      id: "primi",
      name: "Primi Piatti",
      items: [
        {
          id: "pri-1",
          name: "Spaghetti alle Vongole",
          description: "Spaghetti con vongole fresche, aglio, prezzemolo e un tocco di peperoncino",
          price: "€22",
          icon: "🍝",
        },
        {
          id: "pri-2",
          name: "Malloreddus alla Campidanese",
          description: "Gnocchetti sardi con ragù di salsiccia, zafferano e pecorino sardo DOP",
          price: "€20",
          icon: "🍝",
        },
        {
          id: "pri-3",
          name: "Fregola con Arselle",
          description: "Fregola sarda tostata con arselle, pomodorini e bottarga di muggine",
          price: "€24",
          icon: "🍲",
        },
        {
          id: "pri-4",
          name: "Ravioli di Ricotta e Menta",
          description: "Ravioli fatti a mano ripieni di ricotta fresca e menta, con burro e salvia",
          price: "€19",
          icon: "🥟",
        },
        {
          id: "pri-5",
          name: "Risotto ai Frutti di Mare",
          description: "Risotto cremoso con gamberi, cozze, vongole e calamari del Mediterraneo",
          price: "€26",
          icon: "🍚",
        },
      ],
    },
    {
      id: "secondi",
      name: "Secondi Piatti",
      items: [
        {
          id: "sec-1",
          name: "Porceddu Arrosto",
          description: "Maialino sardo arrosto lentamente con mirto e erbe aromatiche della macchia mediterranea",
          price: "€32",
          icon: "🍖",
        },
        {
          id: "sec-2",
          name: "Branzino alla Griglia",
          description: "Branzino fresco alla griglia con patate al rosmarino e verdure di stagione",
          price: "€28",
          icon: "🐟",
        },
        {
          id: "sec-3",
          name: "Filetto di Manzo",
          description: "Filetto di manzo alla griglia con riduzione al Cannonau e funghi porcini",
          price: "€36",
          icon: "🥩",
        },
        {
          id: "sec-4",
          name: "Aragosta alla Catalana",
          description: "Aragosta freschissima con insalata di pomodori, cipolla rossa e sedano",
          price: "€45",
          icon: "🦞",
        },
      ],
    },
    {
      id: "dolci",
      name: "Dolci",
      items: [
        {
          id: "dol-1",
          name: "Seadas",
          description: "Dolce tradizionale sardo: pasta fritta ripiena di pecorino fresco, miele di corbezzolo",
          price: "€12",
          icon: "🍯",
        },
        {
          id: "dol-2",
          name: "Tiramisù della Casa",
          description: "Il nostro tiramisù classico con mascarpone, caffè espresso e cacao amaro",
          price: "€10",
          icon: "🍰",
        },
        {
          id: "dol-3",
          name: "Panna Cotta al Mirto",
          description: "Panna cotta vellutata aromatizzata al mirto sardo con frutti di bosco",
          price: "€11",
          icon: "🍮",
        },
        {
          id: "dol-4",
          name: "Cannoli Siciliani",
          description: "Cannoli croccanti ripieni di ricotta, pistacchi e gocce di cioccolato",
          price: "€9",
          icon: "🧁",
        },
      ],
    },
  ],
  bar: [
    {
      id: "sushi",
      name: "Sushi",
      isNew: true,
      items: [
        {
          id: "sus-1",
          name: "Sashimi Misto",
          description: "Selezione di salmone, tonno e branzino del Mediterraneo, tagliato al momento",
          price: "€18",
          icon: "🍣",
          isNew: true,
        },
        {
          id: "sus-2",
          name: "Nigiri di Salmone",
          description: "Due pezzi di riso delicatamente pressato con fette di salmone fresco e wasabi",
          price: "€10",
          icon: "🍣",
          isNew: true,
        },
        {
          id: "sus-3",
          name: "California Roll",
          description: "Rotolo con granchio, avocado, cetriolo e maionese giapponese, 8 pezzi",
          price: "€14",
          icon: "🍱",
          isNew: true,
        },
        {
          id: "sus-4",
          name: "Dragon Roll",
          description: "Rotolo con gambero in tempura, avocado, tobiko e salsa teriyaki, 8 pezzi",
          price: "€16",
          icon: "🐉",
          isNew: true,
        },
        {
          id: "sus-5",
          name: "Nigiri di Tonno",
          description: "Due pezzi di tonno rosso su riso, con un tocco di salsa ponzu",
          price: "€12",
          icon: "🍣",
          isNew: true,
        },
        {
          id: "sus-6",
          name: "Edamame",
          description: "Fagioli di soia al vapore con sale marino e un tocco di peperoncino",
          price: "€6",
          icon: "🌱",
          isNew: true,
        },
        {
          id: "sus-7",
          name: "Tempura Misto",
          description: "Gamberi e verdure in pastella leggera e croccante con salsa tentsuyu",
          price: "€15",
          icon: "🍤",
          isNew: true,
        },
        {
          id: "sus-8",
          name: "Chirashi Bowl",
          description: "Ciotola di riso con selezione di pesce fresco, avocado, alghe e sesamo",
          price: "€20",
          icon: "🥢",
          isNew: true,
        },
      ],
    },
    {
      id: "cocktails",
      name: "Cocktail",
      items: [
        {
          id: "cock-1",
          name: "Sardinian Spritz",
          description: "Il nostro Aperol Spritz con un twist sardo: mirto, prosecco e acqua frizzante",
          price: "€14",
          icon: "🍹",
        },
        {
          id: "cock-2",
          name: "Negroni Classico",
          description: "Gin, Campari e Vermouth rosso, servito con scorza d'arancia",
          price: "€13",
          icon: "🥃",
        },
        {
          id: "cock-3",
          name: "Limoncello Mojito",
          description: "Rum bianco, limoncello artigianale, menta fresca, zucchero di canna e lime",
          price: "€14",
          icon: "🍸",
        },
        {
          id: "cock-4",
          name: "Mediterranean Mule",
          description: "Vodka, ginger beer, basilico, cetriolo e succo di lime fresco",
          price: "€13",
          icon: "🫙",
        },
        {
          id: "cock-5",
          name: "Bellini alla Pesca Sarda",
          description: "Prosecco con purée di pesche sarde fresche e un tocco di vaniglia",
          price: "€12",
          icon: "🥂",
        },
      ],
    },
    {
      id: "vini",
      name: "Vini",
      items: [
        {
          id: "vin-1",
          name: "Vermentino di Gallura DOCG",
          description: "Vino bianco fresco e minerale, perfetto con i piatti di mare",
          price: "€8 / €32",
          icon: "🍷",
        },
        {
          id: "vin-2",
          name: "Cannonau di Sardegna DOC",
          description: "Rosso corposo e strutturato, ideale con carni e formaggi stagionati",
          price: "€9 / €36",
          icon: "🍷",
        },
        {
          id: "vin-3",
          name: "Torbato Brut Spumante",
          description: "Bollicine sarde eleganti e raffinate, metodo classico",
          price: "€10 / €42",
          icon: "🥂",
        },
        {
          id: "vin-4",
          name: "Moscato di Sardegna",
          description: "Vino dolce e aromatico, perfetto per accompagnare i dessert",
          price: "€7 / €28",
          icon: "🍾",
        },
      ],
    },
    {
      id: "birre",
      name: "Birre",
      items: [
        {
          id: "bir-1",
          name: "Ichnusa Non Filtrata",
          description: "La birra sarda per eccellenza, non filtrata, dal gusto pieno e autentico",
          price: "€6",
          icon: "🍺",
        },
        {
          id: "bir-2",
          name: "Birra Artigianale al Mirto",
          description: "Birra craft locale aromatizzata alle bacche di mirto sardo",
          price: "€8",
          icon: "🍺",
        },
        {
          id: "bir-3",
          name: "Peroni Gran Riserva",
          description: "Lager italiana premium, doppio malto, dal sapore equilibrato e persistente",
          price: "€7",
          icon: "🍻",
        },
      ],
    },
    {
      id: "analcolici",
      name: "Analcolici",
      items: [
        {
          id: "ana-1",
          name: "Limonata della Casa",
          description: "Limoni freschi della Sardegna, menta e zucchero di canna",
          price: "€6",
          icon: "🍋",
        },
        {
          id: "ana-2",
          name: "Spremuta d'Arancia",
          description: "Arance siciliane spremute al momento",
          price: "€5",
          icon: "🍊",
        },
        {
          id: "ana-3",
          name: "Acqua San Pellegrino",
          description: "Acqua minerale frizzante italiana, 75cl",
          price: "€4",
          icon: "💧",
        },
        {
          id: "ana-4",
          name: "Caffè Espresso",
          description: "Miscela italiana premium, tostatura media, servito nella tradizionale tazzina",
          price: "€3",
          icon: "☕",
        },
      ],
    },
  ],
};
