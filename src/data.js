const BASE_URL = import.meta.env.BASE_URL;

const nisaCaseStudy = {
    subtitle: 'NISA Talent — Digital Catalogue',
    intro: 'A six-slide digital catalogue for a boutique artist management agency in India',
    meta: [
        { label: 'Year', value: '2026' },
        { label: 'Role', value: 'Sole designer & copywriter' },
        { label: 'Skills', value: 'Brand strategy, editorial design, copywriting' },
        { label: 'Client', value: 'NISA Talent, Delhi' },
        { label: 'Deliverable', value: 'Cover system + 6-slide catalogue PDF' }
    ],
    summaryParagraphs: [
        'NISA Talent represents performing artists for live events across India and international stages. The founder wanted a digital catalogue he could send to event organisers, brands, and prospective clients to introduce the agency and its roster.'
    ],
    sections: [
        {
            title: 'The Problem',
            content: [
                'Most artist management catalogues in India look the same. Statistics on the cover, icon grids for art forms, "Why Choose Us" bullet lists, stock imagery of microphones and stages which had a vendor Pitch feel to it rather than introductions to a curated agency.',
                'NISA had a different kind of business — smaller roster, deeper relationships, a founder who cared about how artists were placed rather than just how often. The catalogue needed to reflect that.'
            ]
        },
        {
            title: 'Research',
            content: [
                'Before designing anything, I spent time looking at how other artist management and booking agencies presented themselves, both in India and internationally. The patterns were clear:',
                {
                    type: 'list',
                    items: [
                        'Indian agencies leaned heavily on credentials — client logos, statistics, lists of celebrities they\'d worked with. The visual language was loud and dense, designed to impress event organisers quickly.',
                        'Larger international agencies (CAA, WME, United Talent) barely had public catalogues at all. Their websites were quiet, confident, almost minimal, the agency itself was the credential.',
                        'Boutique European agencies (especially in fashion, classical music, and theatre) treated their introductory materials like magazine spreads. Editorial typography, restrained colour, photography as identity.'
                    ]
                },
                'The gap was obvious. India didn\'t have a visual reference for an agency that wanted to position itself as boutique and curated rather than big and loud. That gap became the opportunity.',
                'I also reviewed adjacent industries — fashion lookbooks, art gallery catalogues, classical music programmes, and small-press publications to understand how editorial design conveys credibility without bullet points or statistics.'
            ]
        },
        {
            title: 'The Opportunity',
            content: [
                'Based on the research, I chose to design the catalogue like a small magazine rather than a sales deck. A document that signalled craft before it tried to sell anything — built around editorial restraint rather than visual density.',
                'That framing shaped everything that followed:',
                {
                    type: 'list',
                    items: [
                        'Editorial typography over corporate sans-serif',
                        'One restrained accent colour, used sparingly',
                        'Typographic indices instead of icon grids',
                        'Short paragraphs instead of bulleted lists',
                        'A deliberately low word count per slide'
                    ]
                }
            ]
        },
        {
            title: 'Design Values',
            content: [
                {
                    type: 'subsections',
                    items: [
                        {
                            title: '1. Specificity over warmth',
                            content: [
                                'Generic agency language doesn\'t build trust — it dilutes it. "We brief artists ahead of the event, coordinate logistics with the venue, and stay reachable throughout the night" reads warmer than "we cherish every artist," because it\'s actually describing how the agency works. Adjectives like bespoke, curated, world-class were cut unless they earned their place.'
                            ]
                        },
                        {
                            title: '2. Echoes across slides',
                            content: [
                                'Phrases planted early reappeared later in slightly different form. "A house, not a directory" on Slide 2 set up "A house built on taste" on Slide 5. "The artist we promised" on Slide 5 echoed "the artist on the stage feels like the one you imagined" on Slide 4. Internal echoes made six independent spreads feel like one document.'
                            ]
                        },
                        {
                            title: '3. Restraint as identity',
                            content: [
                                'The strongest thing the design could do was leave space alone. The cover\'s empty green panel does as much work as the wordmark itself. Restraint became the brand\'s visual signature.'
                            ]
                        }
                    ]
                }
            ]
        },
        {
            title: 'Design Goals',
            content: [
                {
                    type: 'list',
                    items: [
                        'Goal 01 — Build a cover that anchored the brand: Strong enough to set the tone for the catalogue, flexible enough to extend into social templates and future touchpoints.',
                        'Goal 02 — Make twelve art forms readable in one slide: Without resorting to an icon grid or a wall of text.',
                        'Goal 03 — Translate the founder\'s five-step process into something visual: While keeping the voice she\'d written it in.',
                        'Goal 04 — Hold one consistent voice across copy and design: So the catalogue read as a single document rather than six independent slides.'
                    ]
                }
            ]
        },
        {
            title: 'Solution',
            content: [
                {
                    type: 'subsections',
                    items: [
                        {
                            title: '1. Five cover mockups, one chosen',
                            content: [
                                'I designed five cover directions before the final one was selected. Each tested a different visual hypothesis:',
                                {
                                    type: 'list',
                                    items: [
                                        'Cream + impressionist band painting — warm, communal',
                                        'White + cobalt sketched jazz band — confident and minimalist',
                                        'Forest green + textured oil-painting trumpet portrait — chosen',
                                        'Crimson red + the same portrait — dramatic and loud',
                                        'Royal blue + a vibrant multicoloured portrait — energetic but visually loud against a quieter interior'
                                    ]
                                },
                                'The green cover was selected because the typography and the image worked with each other rather than against each other. It was also the only version that felt like an agency rather than an event flyer.'
                            ]
                        },
                        {
                            title: '2. The six slides',
                            content: [
                                {
                                    type: 'list',
                                    items: [
                                        '01 Manifesto. One sentence, big, in serif. No bullets. A single italic gold accent.',
                                        '02 Who we are. A grid of green-tinted artist photos with a short paragraph.',
                                        '03 The roster. A typographic index of twelve art forms in two numbered columns with small-caps contextual tags. Footer note "and more…" to leave room for the roster to grow.',
                                        '04 Our process. Five steps, laid out like a film script. The last step in gold italic to signal the emotional close.',
                                        '05 A house built on taste. Three short paragraphs explaining what made NISA different. No "Why Us" header.',
                                        '06 Get in touch. Mirrored the cover layout — split panel, portrait on one side, contact details on the other.'
                                    ]
                                }
                            ]
                        },
                        {
                            title: '3. The copy',
                            content: [
                                'This took longer than the design itself. Almost every line of the catalogue was rewritten and refined against the brand voice. The rules that emerged:',
                                {
                                    type: 'list',
                                    items: [
                                        'Cut every empty adjective unless it earned its place',
                                        'Replace sentimental phrasing with operational detail',
                                        'Keep paragraphs short — never more than three sentences',
                                        'Plant phrases that could echo across slides'
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        },
                {
                    title: 'Final Takeaways',
                    content: [
                        {
                            type: 'subsections',
                            items: [
                                {
                                    title: '1. The voice decision is the design decision.',
                                    content: [
                                        'Once the brand voice was clear — boutique, editorial, restrained — every design choice answered itself. Typography, layout, colour, word count. The hardest part of the project was getting the voice right early. Everything downstream got easier.'
                                    ]
                                },
                                {
                                    title: '2. Lock the visual system before slide two.',
                                    content: [
                                        'Midway through, I explored a lighter photo-led system before returning to the editorial direction. It cost me a few hours of redoing slides already in progress. Next time the visual system gets locked before the second slide goes into Figma.'
                                    ]
                                },
                                {
                                    title: '3. Restraint is harder to defend than density.',
                                    content: [
                                        'Empty space can read as "unfinished" if you don\'t show why it\'s working. The most useful technique was building a denser alternative version and placing it next to the restrained one — seeing them side by side made the case for restraint without me needing to argue it.'
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    title: 'Acknowledgements',
                    content: [
                        'Thanks to the NISA founder for trusting the brand voice and being open to iteration on the copy. And to a few designer friends who reviewed early covers and gave me honest feedback on which ones weren\'t working.'
                    ]
                }
    ]
};

const cocoaCaseStudy = {
    subtitle: 'Agent Cocoa — AI-Powered Media Buyer',
    intro: 'An autonomous, AI-powered media buyer designed specifically for portfolio companies and organizations managing multiple ad accounts.',
    meta: [
        { label: 'Role', value: 'Product & Visual Designer' },
        { label: 'Platform', value: 'Web Application / AI Dashboard' }
    ],
    summaryParagraphs: [
        'Managing digital advertising across a portfolio of companies is notoriously inefficient. Media buyers spend countless hours manually auditing ad spend, analyzing creatives, and trying to cross-pollinate successful strategies between different ad accounts on Google, Meta, and LinkedIn.',
        'Agent Cocoa acts as an autonomous, AI-powered media buyer. By integrating directly with major ad networks, it audits spend in real-time, drastically reduces budget waste, and autonomously tests and scales winning creative formulas across the entire portfolio.'
    ],
    sections: [
        {
            title: 'The Problem Space',
            content: [
                'For organizations managing 10, 20, or 50+ ad accounts, data is heavily siloed. A marketing strategy that works beautifully for Company A on Meta might take months to be manually discovered and applied to Company B.',
                'The key pain points were obvious:',
                {
                    type: 'list',
                    items: [
                        'Budget Bleed: Thousands of dollars wasted daily on underperforming ads that human managers cannot monitor 24/7.',
                        'Manual Auditing: Conducting comprehensive ad audits across platforms is a tedious, spreadsheet-heavy process.',
                        'Wasted Creative Potential: There was no automated way to say, "This video ad format worked great for Portfolio Co. 1, let\'s instantly test a variation for Portfolio Co. 2."'
                    ]
                },
                'The goal was to design an intelligent system that doesn\'t just display data, but acts on it—an AI media buyer that optimizes budgets and creatives with the speed and scale no human team could match.'
            ]
        },
        {
            title: 'The Solution',
            content: [
                'Agent Cocoa shifts the paradigm from passive analytics dashboards to active, agentic AI. Here are the key features designed:',
                {
                    type: 'subsections',
                    items: [
                        {
                            title: '1. The Omni-Auditor',
                            content: [
                                'A real-time engine that monitors Google, Meta, and LinkedIn simultaneously. It flags wasted spend instantly and highlights anomalies using a clean, easily scannable UI.'
                            ]
                        },
                        {
                            title: '2. Autonomous Budget Optimization',
                            content: [
                                'Instead of just alerting the user, Agent Cocoa can be granted permission to automatically reallocate budgets away from failing campaigns to top-performers.'
                            ]
                        },
                        {
                            title: '3. The Creative Cross-Pollinator',
                            content: [
                                'Agent Cocoa analyzes winning creative variables (e.g., "short-form UGC videos with text hooks") in one account, and generates actionable recommendations to deploy similar formulas in other relevant portfolio accounts.'
                            ]
                        },
                        {
                            title: '4. Trust & Explainability UI',
                            content: [
                                'Because AI handling large budgets can be scary for users, we designed a "Decision Log." Every action Cocoa takes is documented with transparent reasoning.'
                            ]
                        }
                    ]
                }
            ]
        },
        {
            title: 'The Design Process',
            content: [
                'The biggest UX challenge wasn\'t visualizing the data—it was designing for trust. If an AI is going to manage a $100,000 monthly ad spend, the user needs to feel completely in control.',
                {
                    type: 'subsections',
                    items: [
                        {
                            title: '1. The "Copilot vs. Autopilot" Toggle',
                            content: [
                                'We introduced permission tiers. New users start in "Copilot Mode," where Cocoa suggests optimizations but requires a human click to execute. Once trust is built, they can switch specific campaigns to "Autopilot."'
                            ]
                        },
                        {
                            title: '2. Visualizing the Cross-Pollination',
                            content: [
                                'We designed a unique "Creative Testing Map" that visually shows how an ad concept originated in Account A and is currently being tested in Accounts B and C, giving high-level stakeholders a bird\'s-eye view of portfolio marketing health.'
                            ]
                        }
                    ]
                }
            ]
        },
        {
            title: 'Reflections',
            content: [
                {
                    type: 'subsections',
                    items: [
                        {
                            title: '1. UI for AI is about transparency.',
                            content: [
                                'Users don\'t want a "black box" spending their money. By prioritizing explainability and graduated autonomy (moving from Copilot to Autopilot), we created a tool that media buyers see as a superpower, rather than a replacement.'
                            ]
                        },
                        {
                            title: '2. Designing for failure states.',
                            content: [
                                'When an AI makes decisions, it\'s rarely 100% perfect on the first try. Designing graceful fallback states and clear error messages proved just as important as designing the "happy path." This ensured users could effortlessly course-correct the agent when it misallocated a budget, without losing trust in the system.'
                            ]
                        }
                    ]
                }
            ]
        }
    ]
};

const cards = [
    // 0. BRAND STRATEGY FOR NISA (First Project)
    {
        id: 1,
        title: 'BRAND STRATEGY FOR NISA',
        galleryTitle: 'White + cobalt sketched jazz band',
        description:
            'A curated showcase of design mockups, visual styles, and typographic directions created for NISA. This presentation highlights different creative paths explored for the client after a deliberate discovery call and research.',
        image: `${BASE_URL}images/visual/mockups_for_nisa/nisabluedifferent_illustartion.png`,
        category: 'visual',
        categoryLabel: 'Brand Strategy',
        group: 'mockups_for_nisa',
        year: '2026',
        role: 'Brand & Visual Designer',
        skills: 'Brand Identity, Mockup Design, Visual Curation, Design Research',
        team: 'Solo',
        size: 'wide',
        side: 'left',
        caseStudy: nisaCaseStudy,
    },

    // 2. Agent Cocoa 2024
    {
        id: 2,
        title: 'Agent Cocoa',
        description:
            'From user research and journey mapping through wireframes, prototypes, and a final high-fidelity design system built for calm, accessible experience.',
        image: `${BASE_URL}images/uiux/agent_cocoa/cocoa-ai.png`,
        category: 'development',
        categoryLabel: 'Web Development',
        group: 'agent_cocoa',
        year: '2025',
        role: 'Product Designer',
        skills: 'UI/UX, Wireframing, Prototyping, Figma',
        team: 'Aayushi Singh',
        expandTarget: 800,
        size: 'ultraWide',
        side: 'right',
        related: [19],
        caseStudy: cocoaCaseStudy,
    },

    // NISA (Digital Catalogue & Artist Management)
    {
        id: 3,
        title: 'NISA',
        description:
            'A digital catalogue and brand presentation for NISA, an artist management company. Designed to highlight talent curation, portfolio excellence, and visual storytelling across a beautifully structured editorial layout.',
        image: `${BASE_URL}images/visual/nisa/nisa_slide_1.png`,
        category: 'visual',
        categoryLabel: 'Digital Catalogue',
        group: 'nisa',
        year: '2026',
        role: 'Brand Designer',
        skills: 'Editorial Design, Brand Presentation, Layout Design, Curation',
        team: 'Solo',
        size: 'wide',
        side: 'left',
        caseStudy: nisaCaseStudy,
    },

    // Cremee Fresh
    {
        id: 4,
        title: 'Cremee Fresh',
        description:
            'A comprehensive web experience and menu design for an artisanal bakery, focusing on responsive layouts, dietary filtering, and a premium aesthetic.',
        image: `${BASE_URL}images/uiux/cremee_fresh/cakewebsite1.png`,
        category: 'development',
        categoryLabel: 'Web Development',
        group: 'cremee_fresh',
        year: '2026',
        role: 'Product Designer',
        skills: 'UI/UX, Responsive Design, User Flows',
        team: 'Solo',
        size: 'wide',
        side: 'right',
    },

    // 1. Millie the Witch
    {
        id: 5,
        title: 'Millie the Witch',
        description:
            'An exploration of time-based visual language — how form travels, morphs, and communicates energy across frames.',
        image: `${BASE_URL}images/motion/millie_the_witch/intro.png`,
        video: `${BASE_URL}videos/motion/milie_the_witch/witch_short.MP4`,
        category: 'motion',
        categoryLabel: 'Animation',
        group: 'millie',
        year: '2025',
        role: 'Motion Designer',
        skills: 'After Effects, Illustrator, Photoshop, Character Design, Animation',
        team: 'Solo',
        size: 'tall',
        side: 'left',
        related: [10],
    },

    // 3. Hold Your Pee: Drink Card (video)
    {
        id: 6,
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

    // 4. System-on-Modules Animation
    {
        id: 7,
        title: 'System-on-Modules Animation',
        description:
            'An animation of a system-on-modules. I also created the illustration for it.',
        coverVideo: `${BASE_URL}images/motion/millie_the_witch/embeddedSytem.mp4`,
        category: 'motion',
        categoryLabel: 'Motion',
        group: 'som',
        year: '2025',
        role: 'Motion Designer & Illustrator',
        skills: 'Illustrator, After effects',
        team: 'Solo',
    },

    // 5. Character Silhouette (new)
    {
        id: 8,
        title: 'Character Silhouette',
        description:
            'Character silhouette exploration for the Millie the Witch animated concept.',
        image: `${BASE_URL}images/motion/millie_the_witch/CharacterSilhoutte.svg`,
        categoryLabel: 'Character Design',
        group: 'millie',
        year: '2025',
        role: 'Illustrator',
        skills: 'Character Design, Illustration',
        team: 'Solo',
    },
    {
        id: 9,
        title: 'Millie Character',
        description:
            'Character illustration for the Millie the Witch animated concept.',
        image: `${BASE_URL}images/motion/millie_the_witch/Character.svg`,
        category: 'visual',
        categoryLabel: 'Character Design',
        group: 'millie',
        year: '2025',
        role: 'Illustrator',
        skills: 'Character Design, Illustration',
        team: 'Solo',
    },

    // Millie Logo (swapped to position 6)
    {
        id: 10,
        title: 'Millie Logo',
        description:
            'Wordmark and brand identity exploration for the Millie the Witch animated concept.',
        image: `${BASE_URL}images/visual/agent_cocoa/millie_logo.jpg`,
        category: 'visual',
        categoryLabel: 'Brand Design',
        group: 'millie',
        year: '2025',
        role: 'Brand Designer',
        skills: 'Identity, Lettering',
        team: 'Solo',
        size: 'default',
        side: 'bottom',
        related: [5],
    },

    // Millie Character Design & Flowboard
    {
        id: 11,
        title: 'Millie Character Design',
        image: `${BASE_URL}images/motion/millie_the_witch/StagesOfMillei_Illustration.svg`,
        categoryLabel: 'Character Design',
        group: 'millie',
    },
    {
        id: 12,
        title: 'Millie Flowboard',
        image: `${BASE_URL}images/motion/millie_the_witch/flow.PNG`,
        categoryLabel: 'Animation',
        group: 'millie',
    },
    {
        id: 13,
        title: 'Agent Cocoa Home',
        image: `${BASE_URL}images/uiux/agent_cocoa/Home.png`,
        categoryLabel: 'Web Development',
        group: 'agent_cocoa',
    },
    {
        id: 14,
        title: 'Agent Cocoa Features',
        image: `${BASE_URL}images/uiux/agent_cocoa/Feature.png`,
        categoryLabel: 'Web Development',
        group: 'agent_cocoa',
    },
    {
        id: 15,
        title: 'Agent Cocoa How it Works',
        image: `${BASE_URL}images/uiux/agent_cocoa/how-it-works.png`,
        categoryLabel: 'Web Development',
        group: 'agent_cocoa',
    },
    {
        id: 16,
        title: 'Agent Cocoa Feature Detail',
        image: `${BASE_URL}images/uiux/agent_cocoa/feature-detail.png`,
        categoryLabel: 'Web Development',
        group: 'agent_cocoa',
    },
    {
        id: 17,
        title: 'Millie Animation Frame',
        image: `${BASE_URL}images/motion/millie_the_witch/animation.png`,
        group: 'millie',
    },
    {
        id: 18,
        title: 'Agent Cocoa Pricing',
        image: `${BASE_URL}images/uiux/agent_cocoa/pricing.png`,
        categoryLabel: 'Web Development',
        group: 'agent_cocoa',
    },

    // Agent Cocoa Logo (swapped here)
    {
        id: 19,
        title: 'Agent Cocoa Logo',
        description:
            'The core visual identity and typographic mark for the Agent Cocoa wellness app, emphasizing warmth.',
        image: `${BASE_URL}images/visual/agent_cocoa/agentcocoa.svg`,
        category: 'visual',
        categoryLabel: 'Brand Design',
        group: 'agent_cocoa',
        year: '2025',
        role: 'Brand Designer',
        skills: 'Typography, Logo Design',
        team: 'Aayushi Singh',
        size: 'wide',
        side: 'bottom',
        related: [2],
    },

    // EcoFlink Logo
    {
        id: 20,
        title: 'EcoFlink Logo',
        description:
            'A modern, organic visual identity and logo design for the EcoFlink supermarket chain, emphasizing sustainability, freshness, and approachability.',
        image: `${BASE_URL}images/visual/ecoFlink/ECOFLINK_VectorLogoDesign.png`,
        category: 'visual',
        group: 'ecoflink',
        role: 'Brand Designer',
        skills: 'Typography, Logo Design',
        team: 'Solo',
    },

    // Cool Cat Logo
    {
        id: 21,
        title: 'Cool Cat Logo',
        description:
            'Brand identity and logo design for Cool Cat.',
        image: `${BASE_URL}images/visual/cool_cat/Coolcatlogo.svg`,
        category: 'visual',
        categoryLabel: 'Brand Design',
        group: 'cool_cat',
        year: '2025',
        role: 'Brand Designer',
        skills: 'Logo Design, Illustration',
        team: 'Solo',
    },

    // --- Hold Your Pee cards (all at the bottom) ---
    {
        id: 22,
        title: 'Hold Your Pee: Fishes',
        description:
            'Hold Your Pee is a standard deck game played with friends while drinking. It features 108 cards including minimalist two-colour illustrations like this Fishes card. Project is work in progress and will be in market soon.',
        image: `${BASE_URL}images/visual/hold_your_pee/fishes.svg`,
        group: 'hold_your_pee',
        category: 'visual',
        categoryLabel: 'Mobile Game',
        skills: 'Illustrator, Photoshop, After Effects',
        year: '2025',
        size: 'tall',
        side: 'left',
    },
    {
        id: 23,
        title: 'Hold Your Pee: Cats',
        description:
            'A cohesive visual language for the Hold Your Pee card game — a 108-card standard deck for social drinking. Work in progress, coming to market soon.',
        image: `${BASE_URL}images/visual/hold_your_pee/Cats.svg`,
        category: 'visual',
        categoryLabel: 'Mobile Game',
        group: 'hold_your_pee',
        skills: 'Illustrator, Photoshop, After Effects',
        year: '2025',
        size: 'tall',
        side: 'right',
    },
    {
        id: 24,
        title: 'Hold Your Pee: Geisha',
        description:
            'Minimalist two-colour illustrations for the 108-card Hold Your Pee drinking game. Work in progress, in market soon.',
        image: `${BASE_URL}images/visual/hold_your_pee/Geisha.svg`,
        category: 'visual',
        categoryLabel: 'Mobile Game',
        group: 'hold_your_pee',
        skills: 'Illustrator, Photoshop, After Effects',
        year: '2025',
        size: 'tall',
        side: 'right',
    },
    {
        id: 25,
        title: 'Hold Your Pee: Kabuki',
        description:
            'Kabuki drink card illustration for the Hold Your Pee 108-card deck. This drinking game project is a work in progress and will be available soon.',
        image: `${BASE_URL}images/visual/hold_your_pee/kabuki.svg`,
        category: 'visual',
        categoryLabel: 'Mobile Game',
        group: 'hold_your_pee',
        skills: 'Illustrator, Photoshop, After Effects',
        year: '2025',
        size: 'tall',
        side: 'bottom',
    },
    {
        id: 26,
        title: 'Hold Your Pee: Frog',
        description:
            'Playful green-themed drink card for the Hold Your Pee 108-card deck. A work in progress drinking game, coming soon to market.',
        image: `${BASE_URL}images/visual/hold_your_pee/frog.svg`,
        category: 'visual',
        categoryLabel: 'Mobile Game',
        group: 'hold_your_pee',
        skills: 'Illustrator, Photoshop, After Effects',
        year: '2025',
        size: 'tall',
        side: 'bottom',
    },

    // Cremee Fresh sub-cards
    {
        id: 27,
        title: 'Cremee Fresh Menu',
        image: `${BASE_URL}images/uiux/cremee_fresh/cakewebsite2.png`,
        categoryLabel: 'Web Development',
        group: 'cremee_fresh',
    },
    {
        id: 28,
        title: 'Cremee Fresh Breads',
        image: `${BASE_URL}images/uiux/cremee_fresh/cakewebsite3.png`,
        categoryLabel: 'Web Development',
        group: 'cremee_fresh',
    },
    {
        id: 29,
        title: 'Cremee Fresh Snacks',
        image: `${BASE_URL}images/uiux/cremee_fresh/cakewebsite4.png`,
        categoryLabel: 'Web Development',
        group: 'cremee_fresh',
    },
    {
        id: 30,
        title: 'Cremee Fresh Footer',
        image: `${BASE_URL}images/uiux/cremee_fresh/cakewebsite5.png`,
        categoryLabel: 'Web Development',
        group: 'cremee_fresh',
    },

    // NISA sub-cards
    {
        id: 31,
        title: 'NISA Slate',
        image: `${BASE_URL}images/visual/nisa/nisa_slide_2.png`,
        categoryLabel: 'Digital Catalogue',
        group: 'nisa',
    },
    {
        id: 32,
        title: 'NISA Showcase',
        image: `${BASE_URL}images/visual/nisa/nisa_slide_3.png`,
        categoryLabel: 'Digital Catalogue',
        group: 'nisa',
    },
    {
        id: 33,
        title: 'NISA Roster',
        image: `${BASE_URL}images/visual/nisa/nisa_slide_4.png`,
        categoryLabel: 'Digital Catalogue',
        group: 'nisa',
    },
    {
        id: 34,
        title: 'NISA Talent Profile',
        image: `${BASE_URL}images/visual/nisa/nisa_slide_5.png`,
        categoryLabel: 'Digital Catalogue',
        group: 'nisa',
    },
    {
        id: 35,
        title: 'NISA Contact & Agency Info',
        image: `${BASE_URL}images/visual/nisa/nisa_slide_6.png`,
        categoryLabel: 'Digital Catalogue',
        group: 'nisa',
    },

    // BRAND STRATEGY FOR NISA sub-cards
    {
        id: 36,
        title: 'Alternative Blue Illustration Mockup',
        galleryTitle: 'Cream + impressionist band painting',
        image: `${BASE_URL}images/visual/mockups_for_nisa/nisaOILpaintstyle.png`,
        categoryLabel: 'Brand Strategy',
        group: 'mockups_for_nisa',
    },
    {
        id: 37,
        title: 'Green Oil Painting Mockup',
        galleryTitle: 'Forest green + textured oil-painting trumpet portrait',
        image: `${BASE_URL}images/visual/mockups_for_nisa/nisaGreenMockup.png`,
        categoryLabel: 'Brand Strategy',
        group: 'mockups_for_nisa',
    },
    {
        id: 38,
        title: 'Blue Typographic Mockup',
        galleryTitle: 'Royal blue + a vibrant multicoloured portrait',
        image: `${BASE_URL}images/visual/mockups_for_nisa/NisaBlueFont1.png`,
        categoryLabel: 'Brand Strategy',
        group: 'mockups_for_nisa',
    },
    {
        id: 39,
        title: 'Red Typographic Mockup',
        galleryTitle: 'Crimson red + the same portrait',
        image: `${BASE_URL}images/visual/mockups_for_nisa/nisaRedFont1.png`,
        categoryLabel: 'Brand Strategy',
        group: 'mockups_for_nisa',
    },
]

export default cards
