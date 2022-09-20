import { Locator, Page } from "@playwright/test";

export class ProductList {

    readonly page: Page;
    readonly inventoryName: Locator;

    constructor(page: Page) {
        this.page = page;
        this.inventoryName = this.page.locator('.inventory_item_name');
    }

    getAddToCartBtnByItemName(itemName: string) {
        return this.page.locator(`//div[@class="inventory_item"][contains(.,"${itemName}")]//button`);
    }
}