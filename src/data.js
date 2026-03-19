const BASE_URL = import.meta.env.BASE_URL;

const cards = [
    // Left side (top row)
    {
        id: 1,
        title: 'Millie the Witch',
        description:
            'An exploration of time-based visual language — how form travels, morphs, and communicates energy across frames.',
        image: `${BASE_URL}images/motion/millie_the_witch/Card.png`,
        video: `${BASE_URL}videos/motion/milie_the_witch/witch_short.MP4`,
        category: 'motion',
        categoryLabel: 'Motion',
        year: '2024',
        size: 'tall',
        side: 'left',
    },
    {
        id: 2,
        title: 'Hold Your Pee: Fishes',
        description:
            'A fun, fast-paced card game where players compete to avoid breaking the seal. Features minimalist two-colour illustrations like this Fishes card.',
        image: `${BASE_URL}images/graphic/hold_your_pee/fishes.svg`,
        category: 'graphic',
        categoryLabel: 'Card Game',
        year: '2025',
        size: 'tall',
        side: 'left',
    },
    // Right side (top row)
    {
        id: 3,
        title: 'Agent Cocoa',
        description:
            'From user research and journey mapping through wireframes, prototypes, and a final high-fidelity design system built for calm, accessible experience.',
        image: `${BASE_URL}images/uiux/agent_cocoa/Card.png`,
        category: 'uiux',
        categoryLabel: 'UI / UX',
        year: '2024',
        expandTarget: 800,
        size: 'ultraWide',
        side: 'right',
    },
    {
        id: 4,
        title: 'Hold Your Pee: Cats',
        description:
            'A cohesive visual language for the quick-paced card game, highlighting dynamic typography.',
        image: `${BASE_URL}images/graphic/hold_your_pee/Cats.svg`,
        category: 'graphic',
        categoryLabel: 'Card Game',
        year: '2025',
        size: 'tall',
        side: 'right',
    },
    {
        id: 5,
        title: 'Hold Your Pee: Geisha',
        description:
            'Minimalist two-colour illustrations for a rapidly engaging card game experience.',
        image: `${BASE_URL}images/graphic/hold_your_pee/Geisha.svg`,
        category: 'graphic',
        categoryLabel: 'Card Game',
        year: '2025',
        size: 'tall',
        side: 'right',
    },
    // Bottom row
    {
        id: 6,
        title: 'Hold Your Pee: Kabuki',
        description:
            'Kabuki drink card illustration highlighting striking linework and strict layout structure.',
        image: `${BASE_URL}images/graphic/hold_your_pee/kabuki.svg`,
        category: 'graphic',
        categoryLabel: 'Card Game',
        year: '2025',
        size: 'tall',
        side: 'bottom',
    },
    {
        id: 7,
        title: 'Hold Your Pee: Frog',
        description:
            'Playful green-themed drink card for the Hold Your Pee collection.',
        image: `${BASE_URL}images/graphic/hold_your_pee/frog.svg`,
        category: 'graphic',
        categoryLabel: 'Card Game',
        year: '2025',
        size: 'tall',
        side: 'bottom',
    },
    {
        id: 8,
        title: 'Agent Cocoa Logo',
        description:
            'The core visual identity and typographic mark for the Agent Cocoa wellness app, emphasizing warmth.',
        image: `${BASE_URL}images/visual/agent_cocoa/agentcocoa.svg`,
        category: 'visual',
        categoryLabel: 'Visual Design',
        year: '2024',
        size: 'wide',
        side: 'bottom',
    },
    {
        id: 9,
        title: 'Millie Logo',
        description:
            'Wordmark and brand identity exploration for the Millie the Witch animated concept.',
        image: `${BASE_URL}images/visual/agent_cocoa/millie_logo.jpg`,
        category: 'visual',
        categoryLabel: 'Visual Design',
        year: '2024',
        size: 'default',
        side: 'bottom',
    },
]

export default cards
