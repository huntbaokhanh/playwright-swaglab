import { Page } from "@playwright/test";
import { ProductList } from "../inventory/product.list";

export class CartAction {
    readonly page: Page;

    productList: ProductList

    constructor(page: Page) {
        this.page = page;
        this.productList = new ProductList(page);
    }

    async addItem(itemName: string) {
        await this.productList.getAddToCartBtnByItemName(itemName).click();
    }
}