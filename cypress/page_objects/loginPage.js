class LoginPage {

    constructor() {
        this.userFied = "input[id='user-name']";
        this.passwordField = "input[id='password']";
        this.loginButton = "input[id='login-button']";
        this.errorMessage = "h3[data-test='error']";
        this.errorMessageCrossButton = "button[class='error-button']";

        this.errorLockedMessageText = "Epic sadface: Sorry, this user has been locked out.";
        this.errorNotMatchingMessageText = "Epic sadface: Username and password do not match any user in this service";
    }

    open() {
        cy.visit("/");

        this.checkLoginPageOpened();

        return this;
    }

    checkLoginPageOpened() {
        cy.get(this.loginButton)
            .should('be.visible');

        return this;
    }

    loginAsStandardUser() {
        cy.fixture("userData").then(userData => {

            cy.get(this.userFied)
                .clear()
                .type(userData.login)
                .should('have.value', userData.login);

            cy.get(this.passwordField)
                .clear()
                .type(userData.password)
                .should('have.value', userData.password);

            cy.get(this.loginButton)
                .click();
        }
        )
        return this;
    }

    loginAsUser(login, password) {

        cy.get(this.userFied)
            .clear()
            .type(login)
            .should('have.value', login);

        cy.get(this.passwordField)
            .clear()
            .type(password)
            .should('have.value', password);

        cy.get(this.loginButton)
            .click();

        return this;
    }

    clickOnErrorMessageCross() {
        cy.get(this.errorMessageCrossButton)
            .should('be.visible')
            .click()
            .should('not.exist')

        return this;
    }

    checkWrongUserDataText() {
        cy.get(this.errorMessage)
            .should('be.visible')
            .contains(this.errorNotMatchingMessageText)

        return this;
    }

    checkLockedUserText() {
        cy.get(this.errorMessage)
            .should('be.visible')
            .contains(this.errorLockedMessageText)

        return this;
    }
}

export default new LoginPage()