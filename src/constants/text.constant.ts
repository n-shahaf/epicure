
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
            placeholder: 'Search for restaurant, cuisine, chef',
        },
        POPULAR: {
            title: 'Popular Restaurants in epicure:',
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
        logo: { src: '/icons/FullLogoIcon.svg', alt: 'Epicure Logo' },
        storeIcons: [
            { src: '/icons/AppStoreIcon.svg', alt: 'Apple app store icon' },
            { src: '/icons/GooglePlayIcon.svg', alt: 'google play store icon' }
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