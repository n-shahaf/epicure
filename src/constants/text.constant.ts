
const TEXT = Object.freeze({
    HEADER: {
        links: [
            { name: 'Restaurants', path: '/restaurants' },
            { name: 'Dishes', path: '/dishes' }
        ]
    },
    HOME: {
        HERO: {
            title: 'Epicure works with the top chef restaurants in Tel Aviv',
            placeholder: 'Search for a restaurant, cuisine or dish',
        },
        POPULAR: {
            title: 'Popular Restaurants',
            linkText: 'All Restaurants',
            href: '/restaurants',
        },
        DISH: {
            title: 'Signature dish of:',
            linkText: 'All Restaurants',
        },
        ICON: {
            title: 'the',
            linkText: 'All Restaurants',
        }
    },
    ICONS: {
        heading: 'The meaning of our icons:',
        list: [
            { name: 'Spicy', ImageSrc: '/icons/SpicyIcon.svg' },
            { name: 'Vegetarian', ImageSrc: '/icons/VegetarianIcon.svg' },
            { name: 'Vegan', ImageSrc: '/icons/VeganIcon.svg' },]
    },
    FOOTER: {
        links: [
            { name: 'Contact Us', path: '/contact' },
            { name: 'Term of Use', path: '/terms' },
            { name: 'Privacy Policy', path: '/privacy' },
        ],
    },
    RESTAURANT_CARD: {
        altText: 'Restaurant Image',
    },
} as const)

export default TEXT