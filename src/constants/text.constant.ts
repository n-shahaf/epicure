
const TEXT = Object.freeze({
    HEADER: {
        logoText: 'EPICURE',
        links: [
            { name: 'Restaurants', path: '/restaurants' },
            { name: 'Chefs', path: '/chefs' }
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
    SEARCH_MODAL: {
        title: 'Search',
        placeholder: 'Search for restaurant cuisine, chef',
    },
    CART_MODAL: {
        title: 'Your bag is empty',
        buttonText: 'Order History',
    }
} as const)

export default TEXT