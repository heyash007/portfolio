const BASE_URL = import.meta.env.BASE_URL;

const cards = [
    // 1. Millie the Witch (keep first as is)
    {
        id: 1,
        title: 'Millie the Witch',
        description:
            'An exploration of time-based visual language — how form travels, morphs, and communicates energy across frames.',
        image: `${BASE_URL}images/motion/millie_the_witch/intro.png`,
        video: `${BASE_URL}videos/motion/milie_the_witch/witch_short.MP4`,
        category: 'motion',
        group: 'millie',
        year: '2024',
        role: 'Motion Designer',
        skills: 'After Effects, Illustrator, Photoshop, Character Design, Animation',
        team: 'Solo',
        size: 'tall',
        side: 'left',
        related: [9],
    },

    // 2. Agent Cocoa 2024
    {
        id: 3,
        title: 'Agent Cocoa',
        description:
            'From user research and journey mapping through wireframes, prototypes, and a final high-fidelity design system built for calm, accessible experience.',
        image: `${BASE_URL}images/uiux/agent_cocoa/Card.png`,
        category: 'uiux',
        group: 'agent_cocoa',
        year: '2024',
        role: 'Product Designer',
        skills: 'UI/UX, Wireframing, Prototyping, Figma',
        team: 'Aayushi Singh',
        expandTarget: 800,
        size: 'ultraWide',
        side: 'right',
        related: [8],
    },

    // 3. Hold Your Pee: Drink Card (video)
    {
        id: 18,
        title: 'Hold Your Pee: Drink Card',
        description:
            'Animated drink card for Hold Your Pee — a standard deck game played with friends while drinking. The game consists of 108 cards. This project is currently a work in progress and will be available in the market soon.',
        coverVideo: `${BASE_URL}videos/motion/hold_yout_pee/Drink card Precomp 2_2.MP4`,
        category: 'motion',
        categoryLabel: 'Motion',
        group: 'hold_your_pee',
        year: '2025',
        role: 'Motion Designer',
        skills: 'Illustrator, Photoshop, After Effects',
        team: 'Solo',
        side: 'bottom',
    },

    // 4. Millie Animation Frame
    {
        id: 10,
        title: 'Millie Animation Frame',
        image: `${BASE_URL}images/motion/millie_the_witch/animation.png`,
        category: 'motion',
        group: 'millie',
    },

    // 5. Character Silhouette (new)
    {
        id: 19,
        title: 'Character Silhouette',
        description:
            'Character silhouette exploration for the Millie the Witch animated concept.',
        image: `${BASE_URL}images/motion/millie_the_witch/CharacterSilhoutte.svg`,
        category: 'motion',
        group: 'millie',
        year: '2024',
        role: 'Illustrator',
        skills: 'Character Design, Illustration',
        team: 'Solo',
    },

    // Millie Logo (swapped to position 6)
    {
        id: 9,
        title: 'Millie Logo',
        description:
            'Wordmark and brand identity exploration for the Millie the Witch animated concept.',
        image: `${BASE_URL}images/visual/agent_cocoa/millie_logo.jpg`,
        category: 'visual',
        group: 'millie',
        year: '2024',
        role: 'Brand Designer',
        skills: 'Identity, Lettering',
        team: 'Solo',
        size: 'default',
        side: 'bottom',
        related: [1],
    },

    // Millie Character Design & Flowboard
    {
        id: 11,
        title: 'Millie Character Design',
        image: `${BASE_URL}images/motion/millie_the_witch/StagesOfMillei_Illustration.svg`,
        category: 'motion',
        group: 'millie',
    },
    {
        id: 12,
        title: 'Millie Flowboard',
        image: `${BASE_URL}images/motion/millie_the_witch/flow.PNG`,
        category: 'motion',
        group: 'millie',
    },
    {
        id: 13,
        title: 'Agent Cocoa Home',
        image: `${BASE_URL}images/uiux/agent_cocoa/Home.png`,
        category: 'uiux',
        group: 'agent_cocoa',
    },
    {
        id: 14,
        title: 'Agent Cocoa Features',
        image: `${BASE_URL}images/uiux/agent_cocoa/Feature.png`,
        category: 'uiux',
        group: 'agent_cocoa',
    },
    {
        id: 15,
        title: 'Agent Cocoa How it Works',
        image: `${BASE_URL}images/uiux/agent_cocoa/how-it-works.png`,
        category: 'uiux',
        group: 'agent_cocoa',
    },
    {
        id: 16,
        title: 'Agent Cocoa Feature Detail',
        image: `${BASE_URL}images/uiux/agent_cocoa/feature-detail.png`,
        category: 'uiux',
        group: 'agent_cocoa',
    },
    {
        id: 17,
        title: 'Agent Cocoa Pricing',
        image: `${BASE_URL}images/uiux/agent_cocoa/pricing.png`,
        category: 'uiux',
        group: 'agent_cocoa',
    },

    // Agent Cocoa Logo (swapped here)
    {
        id: 8,
        title: 'Agent Cocoa Logo',
        description:
            'The core visual identity and typographic mark for the Agent Cocoa wellness app, emphasizing warmth.',
        image: `${BASE_URL}images/visual/agent_cocoa/agentcocoa.svg`,
        category: 'visual',
        group: 'agent_cocoa',
        year: '2024',
        role: 'Brand Designer',
        skills: 'Typography, Logo Design',
        team: 'Aayushi Singh',
        size: 'wide',
        side: 'bottom',
        related: [3],
    },

    // Cool Cat Logo
    {
        id: 20,
        title: 'Cool Cat Logo',
        description:
            'Brand identity and logo design for Cool Cat.',
        image: `${BASE_URL}images/visual/cool_cat/Coolcatlogo.svg`,
        category: 'visual',
        group: 'cool_cat',
        year: '2024',
        role: 'Brand Designer',
        skills: 'Logo Design, Illustration',
        team: 'Solo',
    },

    // --- Hold Your Pee cards (all at the bottom) ---
    {
        id: 2,
        title: 'Hold Your Pee: Fishes',
        description:
            'Hold Your Pee is a standard deck game played with friends while drinking. It features 108 cards including minimalist two-colour illustrations like this Fishes card. Project is work in progress and will be in market soon.',
        image: `${BASE_URL}images/visual/hold_your_pee/fishes.svg`,
        group: 'hold_your_pee',
        category: 'visual',
        categoryLabel: 'Card Game',
        skills: 'Illustrator, Photoshop, After Effects',
        year: '2025',
        size: 'tall',
        side: 'left',
    },
    {
        id: 4,
        title: 'Hold Your Pee: Cats',
        description:
            'A cohesive visual language for the Hold Your Pee card game — a 108-card standard deck for social drinking. Work in progress, coming to market soon.',
        image: `${BASE_URL}images/visual/hold_your_pee/Cats.svg`,
        category: 'visual',
        categoryLabel: 'Card Game',
        group: 'hold_your_pee',
        skills: 'Illustrator, Photoshop, After Effects',
        year: '2025',
        size: 'tall',
        side: 'right',
    },
    {
        id: 5,
        title: 'Hold Your Pee: Geisha',
        description:
            'Minimalist two-colour illustrations for the 108-card Hold Your Pee drinking game. Work in progress, in market soon.',
        image: `${BASE_URL}images/visual/hold_your_pee/Geisha.svg`,
        category: 'visual',
        categoryLabel: 'Card Game',
        group: 'hold_your_pee',
        skills: 'Illustrator, Photoshop, After Effects',
        year: '2025',
        size: 'tall',
        side: 'right',
    },
    {
        id: 6,
        title: 'Hold Your Pee: Kabuki',
        description:
            'Kabuki drink card illustration for the Hold Your Pee 108-card deck. This drinking game project is a work in progress and will be available soon.',
        image: `${BASE_URL}images/visual/hold_your_pee/kabuki.svg`,
        category: 'visual',
        categoryLabel: 'Card Game',
        group: 'hold_your_pee',
        skills: 'Illustrator, Photoshop, After Effects',
        year: '2025',
        size: 'tall',
        side: 'bottom',
    },
    {
        id: 7,
        title: 'Hold Your Pee: Frog',
        description:
            'Playful green-themed drink card for the Hold Your Pee 108-card deck. A work in progress drinking game, coming soon to market.',
        image: `${BASE_URL}images/visual/hold_your_pee/frog.svg`,
        category: 'visual',
        categoryLabel: 'Card Game',
        group: 'hold_your_pee',
        skills: 'Illustrator, Photoshop, After Effects',
        year: '2025',
        size: 'tall',
        side: 'bottom',
    },
]

export default cards
