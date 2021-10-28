describe('Searchbox Test', () =>{

    before(function (){

        cy.visit('http://zero.webappsecurity.com/index.html')
    })

    it('should type into searchbox and submit with pressing enter', function () {
        cy.get('#searchTerm').type('some text {enter}')
    });

    it('should show search Results', function () {
        cy.get('h2').contains('Search Results:')
    });
})