import { test, expect, type Page } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://karinabertosh.github.io/coin-market-cap/');
});

test.describe('coins table correctly visible', () => {
  test('search coin, render error text', async ({ page }) => {
    const inputSearch = page.getByPlaceholder('input search text');

    expect(page.getByText('Symbol')).toBeVisible();
    expect(page.getByText('Logo')).toBeVisible();
    expect(page.getByText('Price')).toBeVisible();
    expect(page.getByText('Market Cap')).toBeVisible();
    expect(page.getByText('Volume (24h)')).toBeVisible();

    await inputSearch.click();
    await inputSearch.fill('vvvvv');
    await expect(page.getByTestId('error-text')).toHaveText('There is no such coin');

    await inputSearch.fill('c');
    await expect(page.getByTestId('error-text')).not.toBeVisible()
    await expect(page.getByTestId('coins-table')).toContainText('ADA');
  });
});







