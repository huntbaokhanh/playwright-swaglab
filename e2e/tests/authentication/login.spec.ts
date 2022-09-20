import test, { expect } from "@playwright/test";
import { STANDARD_USER } from "../../models/saucelabs.users";
import { InventoryPage } from "../../page/inventory/inventory.page";
import { LoginPage } from "../../page/authentication/login.page";

test.describe('The user can be log in the app by using valid credential', () => {
    // test.use({ storageState: '' })
    test('Using valid credential', async ({ page }) => {
        const login = new LoginPage(page);
        const inventory = new InventoryPage(page);

        await login.as(STANDARD_USER);
        await expect(inventory.title).toContainText('Product');
    })
})