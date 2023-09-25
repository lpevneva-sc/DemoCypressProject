import HomePage from "../page_objects/homePage";
import LoginPage from "../page_objects/loginPage";

describe(' Product Tests', () => {
    it('---', () => {
        LoginPage
            .open()
            .loginAsStandardUser()
    })
}) 