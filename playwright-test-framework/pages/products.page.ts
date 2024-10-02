// pages/products.page.ts
import { Page } from '@playwright/test';

export class ProductsPage {
  constructor(private page: Page) {}

  get inventoryItems() {
    return this.page.locator('.inventory_item');
  }

  async addRandomItemsToCart(itemCount: number) {
    const items = await this.page.$$('.inventory_item');
    const randomItems = items.sort(() => 0.5 - Math.random()).slice(0, itemCount);

    for (const item of randomItems) {
      const addButton = await item.$('button');
      if (addButton) { // Check if addButton is not null
        await addButton.click();
      } else {
        console.error('Add button not found for item:', item);
      }
    }
  }
}
