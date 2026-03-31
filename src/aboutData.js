const BASE_URL = import.meta.env.BASE_URL;

const aboutPhotos = [
    {
        id: 'art',
        image: `${BASE_URL}images/about/art.jpeg`,
        label: 'art',
        initialRotation: -8,
        initialX: -420,
        initialY: 40,
        description: {
            heading: 'I make things.',
            body: "Art is the space where I think out loud — with charcoal, paint, or whatever's lying around. It's never precious. It's just honest.",
        },
    },
    {
        id: 'childhood',
        image: `${BASE_URL}images/about/childhood.jpeg`,
        label: 'growing up',
        initialRotation: 5,
        initialX: -240,
        initialY: 60,
        description: {
            heading: 'I grew up curious.',
            body: 'I was a happy child, but very quiet — always lost in thought, with a deep interest in observing people and things.',
        },
    },
    {
        id: 'cooking',
        image: `${BASE_URL}images/about/cooking.jpeg`,
        label: 'cooking',
        initialRotation: -3,
        initialX: -60,
        initialY: 20,
        description: {
            heading: 'I cook for people I love.',
            body: 'Cooking taught me patience and restraint — knowing when to stop adding things. That lesson shows up in my design work constantly.',
        },
    },
    {
        id: 'films',
        image: `${BASE_URL}images/about/films.jpeg`,
        label: 'films',
        initialRotation: 7,
        initialX: 120,
        initialY: 50,
        description: {
            heading: 'Films are my obsession.',
            body: 'Colour, composition, pacing — cinema is where I learned to feel design before I could name it. Tarkovsky, Wong Kar-wai, Miyazaki: my three pillars.',
        },
    },
    {
        id: 'photography',
        image: `${BASE_URL}images/about/photography.jpeg`,
        label: 'photography',
        initialRotation: -5,
        initialX: 300,
        initialY: 30,
        description: {
            heading: 'I photograph small things.',
            body: "Not grand landscapes — corners of rooms, the light at 6pm, a stranger's shoes. Photography trained my eye to find beauty in the unremarkable.",
        },
    },
    {
        id: 'infinite_jest',
        image: `${BASE_URL}images/about/infinite_jest.png`,
        label: 'reading',
        initialRotation: 4,
        initialX: 100,
        initialY: 100,
        description: {
            heading: 'David Foster Wallace',
            body: "Books like Infinite Jest challenge and expand how I understand narrative structure and human complexity.",
        },
    },
]

export default aboutPhotos
