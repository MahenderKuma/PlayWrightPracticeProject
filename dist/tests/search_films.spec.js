"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
(0, test_1.test)('search films and display results', async ({ page }) => {
    const query = process.env.MOVIE || 'Avengers';
    await page.goto('https://in.bookmyshow.com', { waitUntil: 'domcontentloaded' });
    // try to close common popups
    try {
        const popup = page.locator('button:has-text("Not Now"), button:has-text("No thanks"), button[aria-label="close"], button:has-text("×")');
        if (await popup.count())
            await popup.first().click();
    }
    catch (e) { }
    // locate search input with several fallbacks
    let search = null;
    const selectors = ['input[placeholder*="Search"]', 'input[type="search"]', 'input[aria-label*="Search"]'];
    for (const sel of selectors) {
        const loc = page.locator(sel);
        if (await loc.count()) {
            search = loc.first();
            break;
        }
    }
    if (!search) {
        console.log('Search input not found on the page.');
        return;
    }
    await search.fill(query);
    await search.press('Enter');
    // wait for results to load
    await page.waitForTimeout(2000);
    // attempt to collect movie titles from a few likely selectors
    const titleSelectors = [
        'a:has(h3)',
        'a:has(h4)',
        'h3',
        'h4',
        '.sc-__title',
        '.card-title',
        '.movie-title'
    ];
    const found = new Set();
    for (const sel of titleSelectors) {
        const elems = page.locator(sel);
        const count = await elems.count();
        for (let i = 0; i < count; i++) {
            const text = (await elems.nth(i).innerText()).trim();
            if (text)
                found.add(text.replace(/\n+/g, ' '));
        }
        if (found.size)
            break;
    }
    console.log('Search query:', query);
    if (!found.size)
        console.log('No movie titles found (selectors may need adjustment).');
    else {
        console.log('Found titles:');
        for (const t of found)
            console.log('-', t);
    }
});
