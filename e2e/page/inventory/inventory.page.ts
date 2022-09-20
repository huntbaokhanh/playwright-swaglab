import { Locator, Page } from '@playwright/test';

export class InventoryPage {
    readonly page: Page;
    readonly title: Locator;

    constructor(page: Page) {
        this.page = page;
        this.title = page.locator('.title');
    }

    async goto() {
        await this.page.goto('https://www.saucedemo.com/inventory.html');
    }
}