## 📱 Automação Mobile — WebdriverIO + Appium + BrowserStack

Este projeto contém uma suíte de testes automatizados para aplicativos mobile Android utilizando:

1 - WebdriverIO

2 - Appium 

3 - BrowserStack App Automate

4 - Mocha

5 - Allure Report

6 - CI/CD via GitHub Actions.

## 🚀 Tecnologias Utilizadas

| Tecnologia                    | Versão      | Descrição                                    |
| ----------------------------- | ----------- | -------------------------------------------- |
| **Node.js**                   | 16+ ou 18+  | Ambiente de execução do projeto              |
| **WebdriverIO**               | v9          | Framework principal de automação             |
| **Appium**                    | Client-side | Controla a automação mobile via BrowserStack |
| **Mocha**                     | –           | Framework de testes                          |
| **BrowserStack App Automate** | –           | Dispositivos reais na nuvem                  |
| **TypeScript**                | –           | Tipagem dos testes                           |
| **Allure Report**             | –           | Relatórios completos com screenshots e logs  |

## 📦 Instalação do Projeto

1️⃣ Clone o repositório

git clone https://github.com/viniciusg025/automacaoMobile.git
cd automacaoMobile

2️⃣ Instale as dependências

npm install

3️⃣ Configurar variáveis de ambiente

O projeto utiliza credenciais do BrowserStack, então você precisa configurá-las.

setx BROWSERSTACK_USERNAME "seu_username"
setx BROWSERSTACK_ACCESS_KEY "sua_access_key"
setx BROWSERSTACK_APP_ID "bs://id-do-app"

Após isso, feche e abra novamente o terminal.

⚠️ Como obter o APP_ID?
Ao subir seu APK no BrowserStack, pegue o valor retornado:
bs://a00b246...

📱 Como Executar os Testes

▶️ Rodar os testes no BrowserStack

npx wdio run wdio.conf.ts 

## 📊 Relatórios com Allure

Durante a execução, o projeto salva automaticamente:

✔ Screenshots de falhas
✔ Logs dos testes
✔ Histórico de passos
✔ Informações do ambiente

## ☁️ CI/CD — GitHub Actions

O projeto contém um workflow chamado:

.github/workflows/mobile-tests.yml

Ele executa:

Instalação do Node

Instalação do Allure

Execução dos testes no BrowserStack

Geração do Allure Report

Para funcionar, configure estes Secrets no GitHub:

| Secret                    | Descrição                    |
| ------------------------- | ---------------------------- |
| `BROWSERSTACK_USERNAME`   | Seu user do BrowserStack     |
| `BROWSERSTACK_ACCESS_KEY` | Acesso à API                 |
| `BROWSERSTACK_APP_ID`     | ID do app enviado para teste |

## 🧪 Padrões dos Testes

Cada teste segue o padrão do WebdriverIO:

Captura de screenshot

Organização por contexto (describe / it)

Padrão Page Objects

Att
Vinicius Gonçalves
Contato: (41)99771-1533 / vinnesantos025@gmail.com
