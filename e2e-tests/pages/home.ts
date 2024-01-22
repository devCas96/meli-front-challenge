import { ROOT_URL } from '@/constants/globals';
import { type Locator, type Page } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly banner: Locator;
  readonly logo: Locator;
  readonly inputSearch: Locator;
  readonly buttonSearch: Locator;

  constructor(page: Page) {
    this.page = page;
    this.banner = page.getByRole('banner');
    this.logo = page.getByRole('link', { name: 'logo Mercado Libre' });
    this.inputSearch = page.getByTestId('input-search');
    this.buttonSearch = page.getByTestId('search-button');
  }
  async fillInputSearch(_value: string) {
    await this.inputSearch.fill(_value);
  }

  async clickButtonSearch() {
    await this.buttonSearch.click();
  }

  async goTo() {
    await this.page.goto(ROOT_URL);
  }
}