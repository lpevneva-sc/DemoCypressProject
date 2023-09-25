class CartPage {
    constructor() {
        this.checkoutButton = '#checkout';
        this.cartItem = '.cart_item';
        this.itemPrice = '.inventory_item_price';
    }

    checkCartPageOpened() {
        cy.get(this.checkoutButton)
            .should('be.visible');

        return this;
    }

    checkNumberProductsInCart(number) {
        cy.get(this.cartItem).should('have.length', number);

        return this;
    }

    checkFirstProductPrice(price) {
        cy.get(this.itemPrice)
            .should('be.visible')
            .contains(price);

        return this;
    }

    submitCart() {
        cy.get(this.checkoutButton)
            .click();

        return this;
    }

}

export default new CartPage();