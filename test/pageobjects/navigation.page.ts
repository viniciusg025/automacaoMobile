import { $ } from '@wdio/globals'
import Page from './page';

class NavigationPage extends Page { 

    // Títulos de cada tela
    get loginTitle() { return driver.isAndroid ? $('//android.widget.TextView[@text="Login / Sign up Form"]') : $('~Login'); }
    get formsTitle() { return driver.isAndroid ? $('//android.widget.TextView[@text="Form components"]') : $('~Forms'); }
    get swipeTitle() { return driver.isAndroid ? $('//android.widget.TextView[@text="Swipe horizontal"]') : $('~Swipe'); }
    get dragTitle() { return driver.isAndroid ? $('//android.widget.TextView[@text="Drag and Drop"]') : $('~Drag'); }

    async telaLogin() {
        const loginBtn = await $('~Login');
        await loginBtn.click();
        await this.loginTitle.waitForDisplayed({ timeout: 5000 });
        return await this.loginTitle.getText();
    }

    async telaForms() {
        const formsBtn = await $('~Forms');
        await formsBtn.click();
        await this.formsTitle.waitForDisplayed({ timeout: 5000 });
        return await this.formsTitle.getText();
    }

    async telaSwipe() {
        const swipeBtn = await $('~Swipe');
        await swipeBtn.click();
        await this.swipeTitle.waitForDisplayed({ timeout: 5000 });
        return await this.swipeTitle.getText();
    }

    async telaDrag() {
        const dragBtn = await $('~Drag');
        await dragBtn.click();
        await this.dragTitle.waitForDisplayed({ timeout: 5000 });
        return await this.dragTitle.getText();
    }

}

export default new NavigationPage();
