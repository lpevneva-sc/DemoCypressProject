import HomePage from "../page_objects/homePage";
import LoginPage from "../page_objects/loginPage";

describe('Menu Links Tests', () => {

    it('Check Menu items', () => {

        LoginPage
            .open()
            .loginAsStandardUser()

        HomePage.checkHomePageOpened()
            .checkHidingAndShowingMenuItems()
            .checkAboutLink();

        LoginPage.open();
    })
}) 