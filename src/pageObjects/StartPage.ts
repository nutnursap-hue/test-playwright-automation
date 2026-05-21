import type { Locator, Page } from '@playwright/test';
import { expect } from '@playwright/test';

export class StartPage {
  readonly page: Page;
  readonly nameInput: Locator;
  readonly emailInput: Locator;
  readonly subscribeButton: Locator;

  constructor(page: Page) {
    this.page = page;

    this.nameInput = page.locator("input[placeholder='Name']");
    this.emailInput = page.locator("div[class='tba-header-start-here'] input[placeholder='Email Address']");
    this.subscribeButton = page.locator("p button[class='formkit-submit formkit-submit']");
  }

  async fillTheSubscriptionForm(name: string, email: string) {
    await this.nameInput.fill(name);
    await this.emailInput.fill(email);
  }

  async isFormHasSubmited() {
    await expect(this.nameInput).not.toBeVisible({timeout: 10000});
    await expect(this.emailInput).not.toBeVisible();
    await expect(this.subscribeButton).not.toBeVisible();
  }
}