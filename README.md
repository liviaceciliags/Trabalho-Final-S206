# Trabalho-Final-S206

Automatização de testes E2E utilizando [Playwright](https://playwright.dev/) para validar o funcionamento básico do site Playwright.

## Objetivo

Garantir que a página inicial do Playwright carregue corretamente e que o link **Get started** aponte para a documentação de introdução.

## Membros do grupo
 - Daniela Maria Barbosa Faria - GEC - 1688
 - João Gabriel Betela da Costa - GES - 193
 - Lívia Cecília Gomes Silva - GEC - 1937
 - Lara Conte Gomes - GEC - 2177
 - Tiago Augusto Costa Carvalho - GEC - 1855

## Estrutura dos Testes

Os testes estão localizados em `tests/` e cobrem o seguinte cenário:

* **Acessar a página** `https://playwright.dev`
* **Clicar** no botão “Get started”
* **Verificar** se a URL resultante é `https://playwright.dev/docs/intro`

## Como executar os testes

1. **Instale as dependências:**

   ```bash
   npm install
   ```

2. **Baixe os navegadores suportados:**

   ```bash
   npx playwright install
   ```

3. **Execute todos os testes:**

   ```bash
   npx playwright test
   ```

4. **Abra o relatório HTML gerado:**

   ```bash
   npx playwright show-report
   ```

## Exemplo de teste

```ts
import { test, expect } from '@playwright/test';

test('acessando página do Playwright', async ({ page }) => {
  // Navega para a home
  await page.goto('https://playwright.dev');

  // Localiza e clica no botão “Get started”
  const botaoGetStarted = page.getByText('Get started');
  await botaoGetStarted.click();
  
  // Valida que a URL foi alterada corretamente
  await expect(page).toHaveURL('https://playwright.dev/docs/intro');
});
```

## Estrutura dos Arquivos

```
.
├── README.md
├── package.json
├── package-lock.json
├── node_modules/
├── playwright.config.ts
├── e2e/                 
|    └── example.spec.ts
├── playwright-report/   
└── test-results/        
.
```

## Contribuição

Pull requests são bem-vindos! Sinta-se à vontade para:

* Adicionar novos cenários de teste
* Melhorar a configuração do Playwright
* Integrar com pipelines de CI (GitHub Actions, GitLab CI etc.)
