import NavigationPage from '../pageobjects/navigation.page';
import { expect } from 'chai';

describe('Navegação entre telas - Native Demo App', () => {

    it('Deve navegar pelas telas e validar o título de cada uma', async () => {

        
        const loginText = await NavigationPage.telaLogin();
        expect(loginText).to.equal('Login / Sign up Form');
        await browser.takeScreenshot();

        
        const formsText = await NavigationPage.telaForms();
        expect(formsText).to.equal('Form components');
        await browser.takeScreenshot();

        
        const swipeText = await NavigationPage.telaSwipe();
        expect(swipeText).to.equal('Swipe horizontal');
        await browser.takeScreenshot();

        
        const dragText = await NavigationPage.telaDrag();
        expect(dragText).to.equal('Drag and Drop');
        await browser.takeScreenshot();

    });

});
