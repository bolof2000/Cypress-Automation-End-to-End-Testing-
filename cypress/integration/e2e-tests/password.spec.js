describe('Password test',() =>{

    before(function (){

        cy.visit('http://zero.webappsecurity.com/index.html')
    })

    it('should click on the signin button', function () {
        cy.get('#signin_button').click()
    });

    it('should should click on the forgotten password', function () {
        cy.get('.offset3 > a').click()
    });

    it('should fill email form', function () {
        cy.get('#user_email').type('test.email@email.com')
    });

    it('should submit the form', function () {
        cy.contains('Send Password').click()
    });
    it('should validate email is sent', function () {
        cy.get('.offset3 span6').contains('offset3 span6')
    });
})