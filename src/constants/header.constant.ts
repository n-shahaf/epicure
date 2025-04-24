export type NavLink = {
    address: string,
    name: string
}

export const NAV_LINKS: readonly NavLink[] = Object.freeze([
    { address: '/restaurants', name: 'Restaurants' },
    { address: '/chefs', name: 'Chefs' }
])
