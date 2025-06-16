// Importa as funções do pacote do Playwright para definir testes e fazer asserts
import { test, expect } from '@playwright/test';

// Define um novo teste 
test('Acessando página do Playwright', async ({ page }) => {

    // Navega até a página inicial do Playwright
    await page.goto('https://playwright.dev');

    // Define um localizador para o elemento que contém 'Get started'
    const botaoGetStarted = page.getByText('Get started');

    // Executa ação de clique no botão localizado
    await botaoGetStarted.click();

    // Verifica se a URL corresponde à página de introdução 
    await expect(page).toHaveURL('https://playwright.dev/docs/intro');
}); 
