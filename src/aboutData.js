const BASE_URL = import.meta.env.BASE_URL;

const aboutPhotos = [
    {
        id: 'art',
        image: `${BASE_URL}images/about/art.jpeg`,
        label: 'art',
        initialRotation: -8,
        initialX: -250,
        initialY: 40,
        description: {
            heading: 'I make things.',
            body: "Mostly to see what I’m thinking.",
        },
    },
    {
        id: 'childhood',
        image: `${BASE_URL}images/about/childhood.jpeg`,
        label: 'growing up',
        initialRotation: 5,
        initialX: -104,
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
        initialX: 42,
        initialY: 20,
        description: {
            heading: 'I love cooking.',
            body: 'My dad thinks i make the best coconut pineapple cream cake in the world. And that makes me very happy. I love what i do, but i care even more about the people i do it for.',
        },
    },
    {
        id: 'films',
        image: `${BASE_URL}images/about/films.jpeg`,
        label: 'films',
        initialRotation: 7,
        initialX: 188,
        initialY: 50,
        description: {
            heading: 'Films are my obsession.',
            body: 'I can talk about films all dayyyyy. I grew up on American classics with my mother — and somewhere along the way picked up Hong Kong action cinema, Kitano Takeshi, Scorsese, the soft warmth of Rob Reiner, and the stranger edges of Dogtooth and Amores Perros. Kramer vs. Kramer, though, sits somewhere closer to my heart. If you want to talk movies, please write to me. I will be more than happy to write back!',
        },
    },
    {
        id: 'photography',
        image: `${BASE_URL}images/about/photography.jpeg`,
        label: 'photography',
        initialRotation: -5,
        initialX: 334,
        initialY: 30,
        description: {
            heading: 'I photograph anything and everything.',
            body: "This is a picture of the high school kids I photographed at a very pleasant sunset. They were so happy talking and watching the sun together, and I was just there quietly watching them from afar.",
        },
    },
    {
        id: 'reading',
        image: `${BASE_URL}images/about/joan_didion.jpg`,
        label: 'reading',
        initialRotation: 4,
        initialX: 480,
        initialY: 60,
        description: {
            heading: 'I enjoy reading',
            body: "As a teen, I grew up reading every blog I could get my hands on — Ran Prieur, The Last Psychiatrist, Venkatesh Rao's Ribbonfarm. I still go back to all of them. This year I'm finishing all six volumes of Proust's In Search of Lost Time. The last book I read was The Unsayable by Annie G. Rogers.",
        },
    },
]

export default aboutPhotos