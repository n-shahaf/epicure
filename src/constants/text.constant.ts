
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
            href: '/restaurants',
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
    CHEF: {
        title: 'Chef of the week:',
    },
    FOOTER: {
        links: [
            { name: 'Contact Us', path: '/contact' },
            { name: 'Term of Use', path: '/terms' },
            { name: 'Privacy Policy', path: '/privacy' },
        ],
    },
    ABOUT: {
        title: 'About Us',
        p1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a lacus vel justo fermentum bibendum non eu ipsum. Cras porta malesuada eros, eget blandit turpis suscipit at. Vestibulum sed massa in magna sodales porta. Vivamus elit urna, dignissim a vestibulum.',
        p2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a lacus vel justo fermentum bibendum no eu ipsum. Cras porta malesuada eros.',
        logoSrc: '/icons/FullLogoIcon.svg',
        logoAlt: 'Epicure Logo',
        appStoreSrc: '/icons/AppStoreIcon.svg',
        appStoreAlt: 'Apple app store icon',
        googleStoreSrc: '/icons/GooglePlayIcon.svg',
        googleStoreAlt: 'google play store icon',
    },
    RESTAURANT_CARD: {
        altText: 'Restaurant Image',
    },
} as const)

export default TEXT