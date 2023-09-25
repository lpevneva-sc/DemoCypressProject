class CheckoutPage {
    constructor() {
        this.checkoutText = 'Checkout: Your Information';
        this.firstNameField = '#first-name';
        this.lastNameField = '#last-name';
        this.zipCodeField = '#postal-code';
        this.continueButton = '#continue';
        this.finishButton = '#finish';
        this.cartItem = ".cart_item"
        this.nameFisrtItem = '.inventory_item_name';
        this.priceFirstItem = '.inventory_item_price';
        this.thankyouText = 'Thank you for your order!';
    }

    checkCheckoutPageOpened() {
        cy.contains(this.checkoutText)
            .should('be.visible')

        return this;
    }

    fillAllFieldsWithValidValuesAndContinue() {
        this.fillFirstName("aaa");
        this.fillLastName("bbb");
        this.fillZipCode("12345");

        cy.get(this.continueButton)
            .should('be.visible')
            .click();

        this.checkCkecoutOverviewPageOpened();

        return this;
    }

    checkNumberProductsOnPage(number) {
        cy.get(this.cartItem)
            .should('have.length', number);

        return this;
    }

    checkNameFirstProduct(name) {
        cy.get(this.nameFisrtItem)
            .should('be.visible')
            .contains(name);

        return this;
    }

    checkPriceFirstProduct(price) {
        cy.get(this.priceFirstItem)
            .should('be.visible')
            .contains(price);

        return this;
    }

    clickFinishButton() {
        cy.get(this.finishButton)
            .should('be.visible')
            .click();

        cy.contains(this.thankyouText);

        return this;
    }

    fillFirstName(name) {
        cy.get(this.firstNameField)
            .clear()
            .type(name)
            .should('have.value', name);

        return this;
    }

    fillLastName(name) {
        cy.get(this.lastNameField)
            .clear()
            .type(name)
            .should('have.value', name);

        return this;
    }

    fillZipCode(code) {
        cy.get(this.zipCodeField)
            .clear()
            .type(code)
            .should('have.value', code);

        return this;
    }

    checkCkecoutOverviewPageOpened() {
        cy.get(this.finishButton)
            .should('be.visible');
    }
}

export default new CheckoutPage();