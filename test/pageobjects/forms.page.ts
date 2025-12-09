import { $ } from '@wdio/globals'
import Page from './page';

class FormPage extends Page {

    get nameInput() {
        return driver.isAndroid ? $('~text-input') : $('~text-input');
    }

    get switchElement() {
        return driver.isAndroid ? $('~switch') : $('~switch');
    }

    get dropdown() {
       return driver.isAndroid
        ? $('//android.widget.EditText[@resource-id="text_input"]')
        : $('-ios predicate string:type == "XCUIElementTypeButton" AND name == "text_input"');
    }

    get buttonsInput(){
        return driver.isAndroid
        ? $('//android.widget.TextView[@text="Active"]')
        : $('-ios predicate string:type == "XCUIElementTypeButton" AND name == "Active"');
    }

    get alertButtonActive(){
        return driver.isAndroid
        ? $('//android.widget.TextView[@resource-id="android:id/message"]')
        : $('-ios predicate string:type == "XCUIElementTypeButton" AND name == "This button is active"');
    }

    async alertButtonActiveValidade(){
        await this.alertButtonActive.waitForDisplayed({ timeout: 5000 });
        const alertMsg =  $('android=new UiSelector().text("This button is active")');
        expect(alertMsg).toBeDisplayed();
    }

    async fillName(name: string) {
        await this.nameInput.waitForDisplayed({ timeout: 5000 });
        await this.nameInput.setValue(name);
    }

    async toggleSwitch() {
        await this.switchElement.waitForDisplayed({ timeout: 5000 });
        await this.switchElement.click();
    }

    async selectDropdown(optionText: string) {
        await this.dropdown.waitForDisplayed({ timeout: 5000 });
        await this.dropdown.click();

        const option = driver.isAndroid
            ? $(`android=new UiSelector().text("${optionText}")`)
            : $(`-ios predicate string:type == "XCUIElementTypeStaticText" AND name == "${optionText}"`);

        await option.waitForDisplayed({ timeout: 5000 });
        await option.click();
    }

    async clickButtonActive(){
        await this.buttonsInput.waitForDisplayed({ timeout: 5000 });
        await this.buttonsInput.click();
    }
}

export default new FormPage();
