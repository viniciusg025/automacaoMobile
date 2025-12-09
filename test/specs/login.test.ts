describe('Native Demo App - Login Flow', () => {

    it('Deve acessar a tela de Login', async () => {
        const loginBtn = await $('~Login');
        await loginBtn.click();

        const loginTitle = await $('~Login-screen');
        await expect(loginTitle).toBeDisplayed();
        await browser.takeScreenshot();

    });

    it('Deve preencher usuário e senha', async () => {
        const username = await $('~input-email');
        const password = await $('~input-password');
        const btnLogin = await $('~button-LOGIN');

        await username.setValue('demo@webdriver.io');
        await password.setValue('wdio1234');
        await browser.takeScreenshot();
        await btnLogin.click();

        const successMsg = await $('~You are logged in!');
        expect(successMsg).toBeDisplayed();
        await browser.takeScreenshot();

    });

});
