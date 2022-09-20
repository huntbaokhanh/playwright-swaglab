import { Locator, Page } from "@playwright/test";

export class CartIcon {
    readonly page: Page;
    readonly link: Locator;

    constructor(page: Page) {
        this.page = page;
        this.link = this.page.locator('.shopping_cart_link');
    }
}