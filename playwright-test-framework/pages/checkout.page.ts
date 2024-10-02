// pages/checkout.page.ts
import { Page } from '@playwright/test';

export class CheckoutPage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.click('#checkout');
  }

  async fillDetails(firstName: string, lastName: string, postalCode: string) {
    await this.page.fill('#first-name', firstName);
    await this.page.fill('#last-name', lastName);
    await this.page.fill('#postal-code', postalCode);
  }

  async completeCheckout() {
    await this.page.click('#continue');
    await this.page.click('#finish');
  }

  get confirmationMessage() {
    return this.page.locator('.complete-header');
  }
}
