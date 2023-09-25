class ProductDetailsPage {
    constructor() {
        this.addToCartButton = '[data-test="add-to-cart-sauce-labs-bike-light"]';
        this.shoppingCartBadge = '.shopping_cart_badge';
    }

    checkProductDetailsPageOpened() {

        cy.get(this.addToCartButton)
            .should('be.visible');

        return this;
    }

    addProductToCart() {
        cy.get(this.addToCartButton)
            .should('be.visible')
            .click();
        cy.get(this.addToCartButton)
            .should('not.exist');

        cy.get(this.shoppingCartBadge)
            .should('be.visible')
            .contains(1);

        return this;
    }

    goToCart() {
        cy.get(this.shoppingCartBadge)
            .click()
            .wait(1000);

        return this;
    }

}

export default new ProductDetailsPage();