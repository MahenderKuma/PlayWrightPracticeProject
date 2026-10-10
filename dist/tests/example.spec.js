"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
(0, test_1.test)('example.com has correct title', async ({ page }) => {
    await page.goto('https://example.com');
    await (0, test_1.expect)(page).toHaveTitle(/Example Domain/);
});
(0, test_1.test)('navigate to More information link', async ({ page }) => {
    await page.goto('https://example.com');
    const more = page.locator('a');
    await (0, test_1.expect)(more).toHaveAttribute('href', /iana.org/);
    await more.click();
    await (0, test_1.expect)(page).toHaveURL(/iana.org/);
});
