import { test, expect } from '@playwright/test';


test.beforeEach(async ({ page }) => {
  await page.goto('https://karinabertosh.github.io/coin-market-cap/');
});

test('main page render correctly', async ({ page }) => {
  const inputSearch = page.getByPlaceholder('input search text');

  expect(page.getByText('Symbol')).toBeTruthy();
  expect(page.getByText('Logo')).toBeTruthy();
  expect(page.getByText('Price')).toBeTruthy();
  expect(page.getByText('Market Cap')).toBeTruthy();
  expect(page.getByText('Volume (24h)')).toBeTruthy();

  await inputSearch.fill('c');
  await inputSearch.press('Enter');

  expect(page.getByText('ADA')).toBeTruthy();
});