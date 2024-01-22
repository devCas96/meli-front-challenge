import { FrontErrors } from '@/constants/errors';
import { test, expect } from '@playwright/test';
import { ItemsPage } from './pages/items';

test.describe('Items result page suite', () => {

  test('Should has the expected html structure', async ({ page }) => {
    const itemsPage = new ItemsPage(page);

    await itemsPage.goToPageWithParam();

    await expect(itemsPage.banner).toBeVisible();
    await expect(itemsPage.logo).toBeVisible();
    await expect(itemsPage.inputSearch).toBeVisible();
    await expect(itemsPage.buttonSearch).toBeVisible();
    await expect(itemsPage.breadcrum).toBeVisible();
    await expect(itemsPage.itemsList).toHaveCount(4);
  });

  test('Should show a controlled error when the user is trying to access directly to items page without search params', async ({ page }) => {
    const itemsPage = new ItemsPage(page);

    await itemsPage.goToPageWithoutParam();

    await expect(itemsPage.errorComponent).toBeVisible();
    await expect(itemsPage.errorComponent.locator('p')).toHaveText(FrontErrors.INVALID_ROUTE);
  });

});

