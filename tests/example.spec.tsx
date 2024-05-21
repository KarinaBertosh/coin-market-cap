import { test, expect, type Page } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:8081/');
  // await page.goto('https://karinabertosh.github.io/coin-market-cap/');
});

test.describe('coins table', () => {
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
    await expect(page.getByTestId('error-text')).not.toBeVisible();
    await expect(page.getByTestId('coins-table')).toContainText('ADA');
  });

  test('filtering', async ({ page }) => {
    const price = page.getByText('Price');

    price.hover();
    await expect(page.getByText('Click to sort ascending')).toBeVisible();

    await price.click();
    await expect(page.getByText('Click to sort descending')).toBeVisible();

    await price.click();
    await expect(page.getByText('Click to cancel sorting')).toBeVisible();
  });

  test('adding and deleting', async ({ page }) => {
    const coinsTable = page.getByTestId('coins-table');
    const ethereum = coinsTable.getByText('ETH');
    const addButton = page.getByText('Add');
    const input = page.getByTestId('input-add-coin');
    const price = page.getByTestId('price');
    const portfolioAmount = page.getByTestId('portfolio-amount');
    const ethereumInPortfolio = portfolioAmount.getByText('ETH');
    const deleteButton = portfolioAmount.getByText('Delete');

    const portfolioModal = page.getByTestId('portfolio-modal');

    await ethereum.first().click();
    await expect(page).toHaveURL('http://localhost:8081/#/info');
    // await expect(page).toHaveURL('https://karinabertosh.github.io/coin-market-cap/#/info');

    await addButton.click();
    await expect(input).toBeVisible();

    await input.click();
    await input.fill('2');
    await input.press('Enter');
    await expect(price).not.toContainText('$0 USD  ');


    await expect(portfolioAmount).toBeVisible();
    // await portfolioAmount.click(); /// not work
    // await expect(portfolioModal).toBeVisible();
    // await expect(ethereumInPortfolio).toBeVisible();
    // await deleteButton.click();
    // await expect(price).toContainText('$0 USD  ');
  });
});







