export class YourcartPage{
    checkout_btn = 'Checkout' //This element type is text

    clickCheckoutBtn(){
        cy.contains(this.checkout_btn).click()
    }

}