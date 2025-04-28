
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
    RESTAURANT_PAGE: {
        title: 'Restaurants',
        paramsList: ['All', 'New', 'Most Popular', 'Open Now'],
        filters: [{ name: 'Price Range', title: 'Price Range Selected' }, { name: 'Distance', title: 'Distance' }, { name: 'Rating', title: 'Rating' }],
    }
} as const)

export default TEXT