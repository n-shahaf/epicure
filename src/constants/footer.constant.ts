export enum FooterLinkName {
    ContactUs = "Contact Us",
    TermOfUse = "Term of Use",
    PrivacyPolicy = "Privacy Policy",
}

export enum FooterLinkPath {
    Contact = "/contact",
    Terms = "/terms",
    Privacy = "/privacy",
}

export type FooterLink = {
    name: FooterLinkName
    path: FooterLinkPath
}

export const FOOTER_LINKS: readonly FooterLink[] = Object.freeze([
    { name: FooterLinkName.ContactUs, path: FooterLinkPath.Contact },
    { name: FooterLinkName.TermOfUse, path: FooterLinkPath.Terms },
    { name: FooterLinkName.PrivacyPolicy, path: FooterLinkPath.Privacy },
] as const)
