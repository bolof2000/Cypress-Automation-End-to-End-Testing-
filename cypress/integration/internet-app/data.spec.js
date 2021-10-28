describe('write /read data into json', () =>{

    it('should write data into JSON',function () {

        cy.writeFile('log.json',{name:'Bolofinde',age:30})
        cy.readFile('log.json').its('age').should('eq',25)
    })
})