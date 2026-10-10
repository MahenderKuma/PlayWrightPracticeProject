import { test, expect } from '../src/fixtures/pageFixture';

test('page fixture example', async ({ pageFixture }) => {
  const { page, actions } = pageFixture;

  await actions.navigateTo('https://example.com');
  await expect(page).toHaveTitle(/Example Domain/);
  await expect(page.locator('h1')).toContainText('Example Domain');
});
