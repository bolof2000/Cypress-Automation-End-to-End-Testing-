describe("Login Test",() =>{

    it('should click form authentication', function () {
        cy.visit("https://the-internet.herokuapp.com/")
        cy.url().should('include','herokuapp.com')

        cy.get('a').contains('Form Authentication').click()

        cy.fixture('user').then(user =>{

            const username= user.username
            const password = user.password

            cy.get('#username').type(username)
            cy.get('#password').type(password)

            cy.get('button').contains('Login').click()

            cy.get('#flash').should('contain','You logged into a secure area!')

        })


    });
})