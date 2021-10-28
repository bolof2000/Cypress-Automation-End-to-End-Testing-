describe('check box tests', () => {

    it('should click checkbox', function () {

        cy.visit('https://the-internet.herokuapp.com/')
        cy.url().should('include','herokuapp.com')

        cy.links('a','Checkboxes')
        cy.get('input').contains('checkbox').click()
    });
})

