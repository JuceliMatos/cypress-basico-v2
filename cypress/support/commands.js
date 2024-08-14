Cypress.Commands.add('fillMandatoryFieldsAndSubmit',function(){

    cy.get('#firstName').type("Maria")
    cy.get('#lastName').type("Moraes")
    cy.get('#email').type('maria@exemplo.com')     
    cy.get('#open-text-area').type('Teste')
    //cy.get('button[type="submit"]').click()
    cy.contains ('button', 'Enviar').click()

})
