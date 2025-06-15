import { test, expect } from '@playwright/test';

test('acessando página do Playwright', async ({page}) => {
    // ações
    await page.goto('https://playwright.dev');

    // Localizador
    const botaoGetStarted = page.getByText('Get started');

    // ações
    await botaoGetStarted.click();
    
    // verificações
    await expect(page).toHaveURL('https://playwright.dev/docs/intro');
});
