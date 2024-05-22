import { test, expect, type Page } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://karinabertosh.github.io/coin-market-cap/');
});

test.describe('basic functionality works correctly', () => {
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

  test('adding, deleting coin. open and close modal window', async ({ page }) => {
    const coinsTable = page.getByTestId('coins-table');
    const ethereum = coinsTable.getByText('ETH');
    const addButton = page.getByText('Add');
    const input = page.getByTestId('input-add-coin');
    const price = page.getByTestId('price');
    const portfolioModal = page.getByTestId('portfolio-modal');
    const deleteButton = page.getByText('Delete');
    const closeButton = page.getByLabel('close');

    await ethereum.first().click();
    await expect(page).toHaveURL('https://karinabertosh.github.io/coin-market-cap/#/info');

    await addButton.click();
    await expect(input).toBeVisible();

    await input.click();
    await input.fill('2');
    await input.press('Enter');
    await expect(price).not.toContainText('$0 USD  ');
    await closeButton.first().click();

    await expect(portfolioModal).not.toBeVisible();
    await price.click();
    await expect(deleteButton).toBeVisible();
    await deleteButton.click();
    await expect(price).toContainText('$0 USD  ');
  });

  test('back button works correctly', async ({ page }) => {
    const coinsTable = page.getByTestId('coins-table');
    const ethereum = coinsTable.getByText('ETH');
    const backButton = page.getByText('Back');

    await ethereum.first().click();
    await expect(page).toHaveURL('https://karinabertosh.github.io/coin-market-cap/#/info');


    await backButton.click();
    await expect(page).toHaveURL('https://karinabertosh.github.io/coin-market-cap/#/');
  });


  test('chart works correctly', async ({ page }) => {
    const coinsTable = page.getByTestId('coins-table');
    const ethereum = coinsTable.getByText('ETH');
    const chart = page.getByTestId('chart');
    const selectorTime = page.getByTestId('select-time');
    const day = page.getByText('Day');
    const twelveHours = page.getByText('12 hours');
    const hour = page.getByText('1 hour');


    await ethereum.first().click();
    await expect(page).toHaveURL('https://karinabertosh.github.io/coin-market-cap/#/info');

    expect(chart).toBeVisible();
    await selectorTime.click();
    await day.click();
    await expect(selectorTime).toContainText('Day');

    await selectorTime.click();
    await twelveHours.click();
    await expect(selectorTime).toContainText('12 hours');

    await selectorTime.click();
    await hour.click();
    await expect(selectorTime).toContainText('1 hour');
  });
});







