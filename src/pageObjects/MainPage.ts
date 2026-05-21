import type { Locator, Page } from '@playwright/test';
import { expect } from '@playwright/test';

export class MainPage {
  readonly page: Page;
  readonly homeHero: Locator;
  readonly homeButton: Locator;
  readonly aboutButton: Locator;
  readonly blogButton: Locator;
  readonly ligthRoomButton: Locator;
  readonly pressButton: Locator;
  readonly contactButton: Locator;
  readonly workWithMeButton: Locator;
  readonly becomeGuestButton: Locator;
  readonly requestButton: Locator;
  readonly faqButton: Locator;
  readonly searchBar: Locator
  readonly searchButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.homeHero = page.locator(".home-hero");
    this.homeButton = page.locator("#menu-top-navigation > li:nth-child(1)");
    this.aboutButton = page.locator("#menu-top-navigation > li:nth-child(2)");
    this.blogButton = page.locator("#menu-top-navigation > li:nth-child(3)");
    this.ligthRoomButton = page.locator("#menu-top-navigation > li:nth-child(4)");
    this.pressButton = page.locator("#menu-top-navigation > li:nth-child(5)");
    this.contactButton = page.locator("#menu-top-navigation > li:nth-child(6)");
    /// Here, it was very difficult to find another locator which can suit, thats why its so long 
    /// Тут по итогу было сложно найти более правильный локатор, поэтомум получился такой длинный
    this.workWithMeButton = page.locator("#menu-top-navigation > li:nth-child(6) > .sub-menu > li:nth-child(1)");
    this.becomeGuestButton = page.locator("#menu-top-navigation > li:nth-child(6) > .sub-menu > li:nth-child(2)");
    this.requestButton = page.locator("#menu-top-navigation > li:nth-child(6) > .sub-menu > li:nth-child(3)");
    ///
    this.faqButton = page.locator("#menu-top-navigation > li:nth-child(7)");
    this.searchBar = page.locator("#searchform-1");
    this.searchButton = page.locator("li[class='right search'] input[value='']")
  }

  async isMainPageOpened(): Promise<boolean> {
    await expect(this.homeHero).toBeVisible();
    return true;
  }

  async searchQuery(query: string) {
    // Используем pressSequentially вместо fill для имитации нажатий клавиш человеком
    await this.searchBar.pressSequentially(query, { delay: 150 });
    await this.page.keyboard.press('Enter', { delay: 100 });
  }

  async isSearchPageOpened(query: string, url: string): Promise<void> {
    const encodedQuery = query.replace(/\s+/g, '+')

    await expect(this.page).toHaveURL(`${url}/?s=${encodedQuery}`);
  }

}