
describe('login tests with command', () =>{

    it('should login to application using cypress command', function () {


        cy.visit("https://the-internet.herokuapp.com/")
        cy.url().should('include','herokuapp.com')
        cy.get('a').contains('Form Authentication').click()
        //todo locate username and password and enter data
        cy.fixture('user').then(user =>{
            const username = user.username
            const password = user.password
            cy.login(username,password)
            cy.get('#flash').should('contain','You logged into a secure area!')
            cy.get('a').should('contain','Logout')
        })

    });




})