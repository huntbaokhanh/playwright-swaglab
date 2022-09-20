import test, { expect } from "@playwright/test";
import { STANDARD_USER } from "../../models/saucelabs.users";
import { LoginPage } from "../../page/authentication/login.page";
import { CartAction } from "../../page/cart/cart.action";
import { CartIcon } from "../../page/cart/cart.icon";
import { InventoryPage } from "../../page/inventory/inventory.page";

test.describe('The user can add an item to cart', () => {
    // test.use({ storageState: 'standardUserStorageState.json' })
    test('the correct item number should be shown', async ({ page }) => {
        const cartIcon = new CartIcon(page);
        const cartAction = new CartAction(page);
        const inventory = new InventoryPage(page);
        const login = new LoginPage(page);

        await login.as(STANDARD_USER);

        await inventory.goto();

        await expect.soft(cartIcon.link).toBeEmpty();
        await cartAction.addItem('Sauce Labs Backpack');

        await expect.soft(cartIcon.link).toContainText('1');
    })
})