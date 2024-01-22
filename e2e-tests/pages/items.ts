import { ROOT_URL } from '@/constants/globals';
import { type Locator, type Page } from '@playwright/test';

export class ItemsPage {
  readonly page: Page;
  readonly banner: Locator;
  readonly logo: Locator;
  readonly inputSearch: Locator;
  readonly buttonSearch: Locator;
  readonly breadcrum: Locator;
  readonly itemsList: Locator;
  readonly errorComponent: Locator;

  constructor(page: Page) {
    this.page = page;
    this.banner = page.getByRole('banner');
    this.logo = page.getByRole('link', { name: 'logo Mercado Libre' });
    this.inputSearch = page.getByTestId('input-search');
    this.buttonSearch = page.getByTestId('search-button');
    this.breadcrum = page.getByTestId('breadcrum');
    this.itemsList = page.locator('ol > li');
    this.errorComponent = page.getByTestId('error-component');
  }
  async fillInputSearch(_value: string) {
    await this.inputSearch.fill(_value);
  }

  async clickButtonSearch() {
    await this.buttonSearch.click();
  }

  async goToPageWithParam() {
    await this.page.goto(`${ROOT_URL}items?search=juguete`);
  }

  async goToPageWithoutParam() {
    await this.page.goto(`${ROOT_URL}items`);
  }
}