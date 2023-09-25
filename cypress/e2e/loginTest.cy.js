import LoginPage from "../page_objects/loginPage";
import HomePage from "../page_objects/homePage";

describe('Login tests', () => {

    it('Check login with standard user', () => {
        LoginPage
            .open()
            .loginAsStandardUser();

        HomePage
            .checkHomePageOpened()
            .logout();

        LoginPage.checkLoginPageOpened();
    });

    it('Check login with wrong user', () => {
        cy.fixture("userData").then(userData => {
            LoginPage.open()
                .loginAsUser(userData.login_wrong, userData.password)
                .checkWrongUserDataText()
                .clickOnErrorMessageCross()
                .checkLoginPageOpened()
        })
    })

    it('Check login with wrong password', () => {
        cy.fixture("userData").then(userData => {
            LoginPage.open()
                .loginAsUser(userData.login, userData.password_wrong)
                .checkWrongUserDataText()
                .clickOnErrorMessageCross()
                .checkLoginPageOpened()
        })
    })

    it('Check login with locked user', () => {
        cy.fixture("userData").then(userData => {
            LoginPage.open()
                .loginAsUser(userData.login_locked, userData.password)
                .checkLockedUserText()
                .clickOnErrorMessageCross()
                .checkLoginPageOpened()
        })
    })
})