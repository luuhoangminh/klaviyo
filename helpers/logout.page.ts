import { Page, Locator, expect } from '@playwright/test';
import { LOGIN_PAGE, LOGOUT_PAGE } from '../config/env';

export class LogoutPage {
  readonly page: Page;
  readonly email: Locator;
  readonly password: Locator;
  readonly loginBtn: Locator;
  readonly userProfile: Locator;
  readonly logoutBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.email = page.locator(LOGIN_PAGE.email);
    this.password = page.locator(LOGIN_PAGE.password);
    this.loginBtn = page.locator(LOGIN_PAGE.button);
    this.userProfile = page.locator(LOGOUT_PAGE.userProfile);
    this.logoutBtn = page.locator(LOGOUT_PAGE.logoutButton);
  }

  async logout(email: string = '', password: string = '') {
    if (email !== '' && password !== '') {
        await this.page.goto(LOGIN_PAGE.url);
        await this.email.fill(email);
        await this.password.fill(password);
        await this.loginBtn.click();

        await expect(this.page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
        await this.userProfile.click();
        await this.logoutBtn.click();
    } else {
        await this.userProfile.click();
        await this.logoutBtn.click();
    }
  }
}