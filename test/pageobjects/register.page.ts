import { $ } from '@wdio/globals'
import Page from './page';


class RegisterPage extends Page {
    public get inputUserEmail () {
        return $('~input-email');
    }
    public get inputPassword () {
        return $('~input-password');
    }
    public get inputConfirmePassword () {
        return $('~input-repeat-password');
    }
    

        async register (useremail: string, password: string, confirmpassword: string) {
        await this.inputUserEmail.setValue(useremail);
        await this.inputPassword.setValue(password);
        await this.inputConfirmePassword.setValue(confirmpassword);
        const signUpButton = driver.isAndroid
        ? $('//android.widget.TextView[@text="SIGN UP"]')
        : $('-ios predicate string:type == "XCUIElementTypeButton" AND name == "SIGN UP"');
        await signUpButton.click();
    }

    
    public open () {
        return super.open('register');
    }
}


export default new RegisterPage();

