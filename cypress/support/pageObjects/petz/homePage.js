/// <reference types="Cypress" />

const url = Cypress.config("baseUrl")

class HomePage {
    static url = 'https://www.petz.com.br/';

    //menu superior
    static barraConsulta = '#search';  
   
}

export default HomePage;