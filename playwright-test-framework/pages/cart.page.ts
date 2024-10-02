// pages/cart.page.ts
import { Page } from '@playwright/test';

export class CartPage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.click('.shopping_cart_link');
  }

  get cartItems() {
    return this.page.locator('.cart_item');
  }
}
