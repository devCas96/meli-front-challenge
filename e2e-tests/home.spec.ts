import { ROOT_URL } from '@/constants/globals';
import { test, expect } from '@playwright/test';
import { HomePage } from './pages/home';

test.describe('Home page suite', () => {

  test('Should has the expected html structure', async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.goTo();

    await expect(homePage.banner).toBeVisible();
    await expect(homePage.logo).toBeVisible();
    await expect(homePage.inputSearch).toBeVisible();
    await expect(homePage.buttonSearch).toBeVisible();
    await expect(homePage.inputSearch).toBeEmpty();
  });

  test('Should keep in home page when search bar is empty', async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.goTo();
    await homePage.fillInputSearch(' ');
    await homePage.clickButtonSearch();

    await expect(page).toHaveURL(ROOT_URL);
  });

  test('Should keep in home page when search bar is filled with special characters', async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.goTo();
    await homePage.inputSearch.fill('.:');
    await homePage.clickButtonSearch();

    await expect(page).toHaveURL(ROOT_URL);
  });

  test('Should navigate to items page when search bar has a correct value and press enter', async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.goTo();
    await homePage.inputSearch.fill('carro');
    await homePage.buttonSearch.press('Enter');

    await expect(page).toHaveURL(`${ROOT_URL}items?search=carro`);
  });

  test('Should navigate to items page when search bar has a correct value', async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.goTo();
    await homePage.fillInputSearch('carro');
    await homePage.clickButtonSearch();

    await expect(page).toHaveURL(`${ROOT_URL}items?search=carro`);
  });

});

