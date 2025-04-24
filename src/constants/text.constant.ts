
export const TEXT = Object.freeze({
    HOME: {
        HERO: {
            title: 'Epicure works with the top chef restaurants in Tel Aviv',
            inputPlaceholder: 'Search for a restaurant, cuisine or dish',
        },
        POPULAR: {
            title: 'Popular Restaurants',
            linkText: 'All Restaurants',
        },
        DISH: {
            title: 'Signature dish of:',
            linkText: 'All Restaurants',
        },
        ICON: {
            title: 'the',
            linkText: 'All Restaurants',
        },
        FOOTER: {
            links: [
                { name: 'Contact Us', path: '/contact' },
                { name: 'Term of Use', path: '/terms' },
                { name: 'Privacy Policy', path: '/privacy' },
            ],
        },
    }

} as const)