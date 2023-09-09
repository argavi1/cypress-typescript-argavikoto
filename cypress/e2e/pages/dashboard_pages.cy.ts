export class DashboardPage{
    link_sauceLabsBackpack = 'Sauce Labs Backpack' //This element type is text
    add_to_cart_btn = 'Add to cart' //This element type is text
    icon_cart = '.shopping_cart_link'

    sauceLabsBackpack(){
        cy.contains(this.link_sauceLabsBackpack).click()
        cy.contains('Sauce Labs Backpack').should('be.visible') 
    }

    clickAddToCartBtn(){
        cy.contains(this.add_to_cart_btn).click()
    }

    clickIconCart(){
        cy.get(this.icon_cart).click()
    }
}