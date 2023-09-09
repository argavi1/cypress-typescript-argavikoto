export class OverviewPage{
    finish_btn = 'Finish' //This element type is text

    clickFinishBtn(){
        cy.contains(this.finish_btn).click()
    }

    assertSuccessfullCheckout(){
        cy.contains('Thank you for your order!').should('be.visible')

    }

}