class HomePage {
  constructor() {
    this.shoppingCartButton = '#shopping_cart_container';
    this.menuButton = '#react-burger-menu-btn';
    this.closeMenuButton = '#react-burger-cross-btn';
    this.pageTitle = '.app_logo';
    this.allItemsLink = '#inventory_sidebar_link';
    this.aboutLink = '#about_sidebar_link';
    this.logoutLink = '#logout_sidebar_link';
    this.resetAppStateLink = '#reset_sidebar_link';
    this.sauceLabUniqItem = 'img[alt="Saucelabs"]';
  }

  checkHomePageOpened() {
    cy.get(this.pageTitle)
      .should('be.visible')

    this.checkShoppingCartButtonShown();

    return this;
  }

  checkHidingAndShowingMenuItems() {
    cy.get(this.menuButton)
      .should('be.visible')

    this.checkAllSubmenuHided();
    this.openMenu();

    cy.get(this.closeMenuButton)
      .click()

    this.checkAllSubmenuHided();

    return this;
  }

  checkAboutLink() {

    this.openMenu();

    cy.get(this.aboutLink)
      .should('be.visible')
      .click()

      .get(this.sauceLabUniqItem)
      .should('be.visible')

    return this;
  }

  logout() {
    this.openMenu()

    cy.get(this.logoutLink)
      .should('be.visible')
      .click()

    return this;
  }

  openMenu() {
    cy.get(this.menuButton)
      .should('be.visible')
      .click();

    this.checkAllSubmenuShown();

    return this;
  }

  checkAllSubmenuShown() {
    cy.get(this.allItemsLink).should('be.visible')
    cy.get(this.aboutLink).should('be.visible')
    cy.get(this.logoutLink).should('be.visible')
    cy.get(this.resetAppStateLink).should('be.visible')

    return this;
  }

  checkAllSubmenuHided() {
    cy.get(this.allItemsLink).should('not.be.visible')
    cy.get(this.aboutLink).should('not.be.visible')
    cy.get(this.logoutLink).should('not.be.visible')
    cy.get(this.resetAppStateLink).should('not.be.visible')

    return this;
  }

  checkShoppingCartButtonShown() {
    cy.get(this.shoppingCartButton)
      .should('be.visible')

    return this;
  }

  findProductByName(name) {
    cy.contains(name)
      .should('be.visible');

    return this;
  }
}

export default new HomePage()