import { FrontErrors } from '@/constants/errors';
import { ROOT_URL } from '@/constants/globals';
import { test, expect } from '@playwright/test';
import { ProductDetailsPage } from './pages/product-details';

test.beforeEach(async ({ page }) => {
  await page.goto(ROOT_URL);
});

test.describe('Product detail page suite', () => {

  test('Should has the expected html structure', async ({ page }) => {
    const productDetailPage = new ProductDetailsPage(page);

    await productDetailPage.goToPageWithParam();

    await expect(productDetailPage.banner).toBeVisible();
    await expect(productDetailPage.logo).toBeVisible();
    await expect(productDetailPage.inputSearch).toBeVisible();
    await expect(productDetailPage.buttonSearch).toBeVisible();
    await expect(productDetailPage.breadcrum).toBeVisible();
    await expect(productDetailPage.article).toBeVisible();
    await expect(productDetailPage.productImage).toBeVisible();
    await expect(productDetailPage.productInfo).toBeVisible();
    await expect(productDetailPage.productDescription).toBeVisible();
  });

  test('Should show a controlled error when the user is trying to access directly to details page with a wrong search param', async ({ page }) => {
    const productDetailPage = new ProductDetailsPage(page);

    await productDetailPage.goToPageWithWrongParam();

    await expect(page.getByTestId('error-component')).toBeVisible();
    await expect(page.getByTestId('error-component').locator('p')).toHaveText(FrontErrors.EMPTY_RESULT);
  });

});

