describe('Feedback Test',() =>{

    before(function (){
        cy.visit('http://zero.webappsecurity.com/index.html')
    })
    
    //todo click feedback link

    it('should click the feedback navbar ', function () {
        cy.contains('Feedback').click()

    });

    it('should enter form data', function () {

        cy.get('#name').type('Olusegun Bolofinde')
        cy.get('#email').type('bolofbaba@gmail.com')
        cy.get('#subject').type('Enquiry about payment')
        cy.get('#comment').type('I do like to know when your office open in denver. and also contact address')
        cy.contains('Send Message').click()

    });

    it('should validate feedback title', function () {
        cy.get('#feedback-title').should('be.visible')
    });

})