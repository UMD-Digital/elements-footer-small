declare global {
    interface Window {
        FooterSmall: typeof FooterSmall;
    }
}
declare type SocialLinkType = {
    [key: string]: string;
};
declare type SocialLinksType = Array<SocialLinkType>;
export default class FooterSmall extends HTMLElement {
    _shadow: ShadowRoot;
    _paddingAmount: string;
    _socialLinks: SocialLinksType;
    constructor();
    static get observedAttributes(): string[];
    attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null): void;
    connectedCallback(): Promise<void>;
    sizeUtility(): void;
    eventResize(): void;
}
export {};
//# sourceMappingURL=index.d.ts.map