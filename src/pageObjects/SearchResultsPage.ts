import type { Locator, Page } from '@playwright/test';
import logger from 'src/utils/logger';

export class SearchResultsPage {
  readonly page: Page;
  readonly searchInput: Locator;
  readonly articleCards: Locator;

  constructor(page: Page) {
    this.page = page;
    this.searchInput = page.locator("#searchform-2");
    this.articleCards = page.locator("article");
  }

  async getArticlesCount(): Promise<number> {
    return await this.articleCards.count();
  }

async getArticleTitleByIndex(index: number): Promise<string> {
    const card = this.articleCards.nth(index);
    const titleLink = card.locator('h2.entry-title a.entry-title-link');
    return (await titleLink.innerText()).trim();
  }

  async getArticleHrefByIndex(index: number): Promise<string | null> {
    const card = this.articleCards.nth(index);
    const titleLink = card.locator('h2.entry-title a.entry-title-link');
    return await titleLink.getAttribute('href');
  }

  async clickArticleByIndex(index: number): Promise<void> {
    const card = this.articleCards.nth(index);
    const titleLink = card.locator('h2.entry-title a.entry-title-link');
    await titleLink.click();
  }
}