import { chromium } from "@playwright/test";
import { STANDARD_USER } from "../models/saucelabs.users";
import { LoginPage } from "../page/authentication/login.page";

async function authorizedSwagLabs() {
    const browser = await chromium.launch();
    const standardUser = await browser.newPage();

    const login = new LoginPage(standardUser);
    await login.as(STANDARD_USER);
    await standardUser.context().storageState({ path: 'standardUserStorageState.json' });
    await browser.close();
}

export default authorizedSwagLabs;