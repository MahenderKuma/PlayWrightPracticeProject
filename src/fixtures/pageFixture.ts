import { test as base, expect, type Browser, type BrowserContext, type Page } from "@playwright/test";
import { UIActions } from "../actions/UIActions";

export type PageFixture = {
  browser: Browser;
  context: BrowserContext;
  page: Page;
  actions: UIActions;
};

export let pageFixture: PageFixture;

export function setPageFixture(browser: Browser, context: BrowserContext, page: Page): void {
  pageFixture = {
    browser,
    context,
    page,
    actions: new UIActions(page)
  };
}

export const test = base.extend<{ pageFixture: PageFixture }>({
  pageFixture: async ({ page, context, browser }, use) => {
    setPageFixture(browser, context, page);
    await use(pageFixture);
  }
});

export { expect };