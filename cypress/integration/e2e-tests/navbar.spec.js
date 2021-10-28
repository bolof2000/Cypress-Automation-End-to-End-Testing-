describe('Navbar Test',() =>{

  before(function (){
      cy.visit('http://zero.webappsecurity.com/index.html')
  })

    it('should should display online banking content', function () {
        cy.contains('Online Banking').click()
        cy.url().should('include','online-banking.html')
        cy.contains('Pay bills easily').should('be.visible')
    });

    it('should display feedback content', function () {
        cy.contains('Feedback').click()
        cy.get('#name').should('be.visible')
    });

    it('should display home page content', function () {
        cy.contains('Zero Bank').click()
        cy.url().should('include','index.html')
    });
})
