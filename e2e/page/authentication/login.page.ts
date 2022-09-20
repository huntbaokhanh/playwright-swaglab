import { Locator, Page } from '@playwright/test';
import { User } from '../../models/saucelabs.users';

export class LoginPage {
    readonly page: Page;
    readonly userNameInput: Locator;
    readonly passwordInput: Locator;
    readonly loginBtn: Locator;

    constructor(page: Page) {
        this.page = page;
        this.userNameInput = page.locator('[data-test="username"]');
        this.passwordInput = page.locator('[data-test="password"]');
        this.loginBtn = page.locator('[data-test="login-button"]');
    }

    async goto() {
        await this.page.goto('https://www.saucedemo.com/');
    }

    async as(user: User) {
        await this.goto();
        
        await this.userNameInput.fill(user.username);
        await this.passwordInput.fill(user.password);
        await this.loginBtn.click();
    }

}