export class CheckoutPage{
    first_name_field = '#first-name'
    last_name_field = '#last-name'
    postal_code_field = '#postal-code'
    continue_btn = 'Continue'

    inputFirstname(firstname: string){
        cy.get(this.first_name_field).type(firstname)
    }

    inputLastname(lastname: string){
        cy.get(this.last_name_field).type(lastname)
    }

    inputPostalcode(postalcode: string){
        cy.get(this.postal_code_field).type(postalcode)
    }

    clickContinueBtn(){
        cy.contains(this.continue_btn).click()
    }

    checkout(firstname : string, lastname : string, postalcode : string){
        this.inputFirstname(firstname)
        this.inputLastname(lastname)
        this.inputPostalcode(postalcode)
        this.clickContinueBtn()
    }

    assertErrorNotif(){
        cy.get('[data-test="error"]').should('be.visible')
    }

}