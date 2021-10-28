class BasePage{

    static loadHomePage(){
        cy.visit("https://the-internet.herokuapp.com/")
    }
    static wait(number){
        cy.wait(number)
    }

    static clickLinks(locator,locatorData){
        cy.get(locator).contains(locatorData).click()
    }
}

class HomePage extends BasePage{


}

