// tests/checkout.spec.ts
import { test, expect } from '@playwright/test';
import { LoginPage } from '/Users/apple/Desktop/Framework/playwright-test-framework/pages/login.page';
import { ProductsPage } from '/Users/apple/Desktop/Framework/playwright-test-framework/pages/products.page';
import { CartPage } from '/Users/apple/Desktop/Framework/playwright-test-framework/pages/cart.page';
import { CheckoutPage } from '/Users/apple/Desktop/Framework/playwright-test-framework/pages/checkout.page';
import { testData } from '/Users/apple/Desktop/Framework/playwright-test-framework/fixtures/test-data';

test.describe('SauceDemo Checkout Flow', () => {

  const { username, password, firstname, lastname, pincode } = testData;

  test('User selects 3 random items and completes checkout', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);
    
    // Navigate to the website and log in
    await loginPage.goto();
    await page.waitForTimeout(2000); // Wait for 2 seconds
    await loginPage.login(username, password);
    await page.waitForTimeout(2000); // Wait for 2 seconds

    // Assert login is successful and user is on the products page
    await expect(productsPage.inventoryItems).toHaveCount(6);
    await page.waitForTimeout(2000); // Wait for 2 seconds

    // Select 3 random items
    await productsPage.addRandomItemsToCart(3);
    await page.waitForTimeout(2000); // Wait for 2 seconds

    // Go to the cart and assert that 3 items are in the cart
    await cartPage.goto();
    await page.waitForTimeout(2000); // Wait for 2 seconds
    await expect(cartPage.cartItems).toHaveCount(3);
    await page.waitForTimeout(2000); // Wait for 2 seconds

    // Proceed to checkout
    await checkoutPage.goto();
    await page.waitForTimeout(2000); // Wait for 2 seconds
    await checkoutPage.fillDetails(firstname, lastname, pincode);
    await page.waitForTimeout(2000); // Wait for 2 seconds
    await checkoutPage.completeCheckout();
    await page.waitForTimeout(2000); // Wait for 2 seconds

    // Assert checkout completion
    await expect(checkoutPage.confirmationMessage).toHaveText('Thank you for your order!');
    await page.waitForTimeout(2000); // Wait for 2 seconds
    
    // Take a screenshot of the checkout page after completion
    await page.screenshot({ path: '/Users/apple/Desktop/Framework/playwright-test-framework/screenshots/checkout-complete.png' });
  
  });
});
