import FormPage from '../pageobjects/forms.page';

describe('Teste de preenchimento de forms - Native Demo App', () => {

    it('Deve acessar a tela do formulário', async () => {
        const FormsBtn = await $('~Forms');
        await FormsBtn.click();
        await browser.takeScreenshot();


        const FormsTitle = await $('~Forms-screen');
        await expect(FormsTitle).toBeDisplayed();
        await browser.takeScreenshot();
        
    });

    it('Deve preencher e submeter o formulário', async () => {

        await FormPage.fillName('Vinicius Test');
       
        await FormPage.toggleSwitch();

        await FormPage.selectDropdown('Appium is awesome');
        await browser.takeScreenshot();

        await FormPage.clickButtonActive();

        await FormPage.alertButtonActiveValidade();
        await browser.takeScreenshot();

    });

});
