import RegisterPage from "../pageobjects/register.page";


describe('Native Demo App - Register Flow', () => {

    it('Deve acessar a tela de Registro', async () => {
        const btnLogin = await $('~Login');
        await btnLogin.click();

        const telaLogin = await $('~Login-screen');
        await expect(telaLogin).toBeDisplayed();
        await browser.takeScreenshot();

        const signUpButton = driver.isAndroid
        ? $('//android.widget.TextView[@text="Sign up"]')
        : $('-ios predicate string:type == "XCUIElementTypeButton" AND name == "Sign Up"');
        await signUpButton.click();
        await browser.takeScreenshot();


    });

    it('Deve preencher os dados de registro do usuário', async () => {
        await RegisterPage.register('demo@webdriver.io', 'wdio1234', 'wdio1234');
        const successMsg = await $('~You successfully signed up!');
        expect(successMsg).toBeDisplayed();
        await browser.takeScreenshot();

    });

});
