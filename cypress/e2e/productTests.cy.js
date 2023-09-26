import HomePage from "../page_objects/homePage";
import LoginPage from "../page_objects/loginPage";
import ProductPage from "../page_objects/productDetailsPage";
import CartPage from "../page_objects/cartPage";
import CheckoutPage from "../page_objects/checkoutPage";

describe(' Product Tests', () => {
    it('Oredering Product Test', () => {
        cy.fixture("productData").then(productData => {

            LoginPage
                .open()
                .loginAsStandardUser();

            HomePage.findAndOpenProductByName(productData.name);

            ProductPage.checkProductDetailsPageOpened()
                .addProductToCart()
                .goToCart();

            CartPage.checkCartPageOpened()
                .checkNumberProductsInCart(1)
                .checkFirstProductPrice(productData.price)
                .submitCart();

            CheckoutPage.checkCheckoutPageOpened()
                .fillAllFieldsWithValidValuesAndContinue()
                .checkNumberProductsOnPage(1)
                .checkNameFirstProduct(productData.name)
                .checkPriceFirstProduct(productData.price)
                .clickFinishButton();
        })

    })

    it('Sorting products by price increasing', () => {
        LoginPage.open()
            .loginAsStandardUser();

        HomePage.checkSortingProductsByPriceAZ('Price (low to high)');
    })

    it('Sorting products by price decreasing', () => {
        LoginPage.open()
            .loginAsStandardUser();

        HomePage.checkSortingProductsByPriceZA('Price (high to low)');
    })

    it('Sorting products by name A - Z ', () => {
        LoginPage.open()
            .loginAsStandardUser();

        HomePage.checkSortingByProductNameAZ('Name (A to Z)');
    })

    it('Sorting products by name Z - A ', () => {
        LoginPage.open()
            .loginAsStandardUser();

        HomePage.checkSortingByProductNameZA('Name (Z to A)');
    })
}) 