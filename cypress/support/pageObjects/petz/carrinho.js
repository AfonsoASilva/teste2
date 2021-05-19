/// <reference types="Cypress" />

const url = Cypress.config("baseUrl")

class CarrinhoCompras {
    static url = 'https://www.petz.com.br/comprarAgora_Loja.html';

    //menu superior    
    static resumo = ".td-resumo > a";
   
    static preco = "tbody > :nth-child(1) > .preco";

    static confirmar = ".btn-redondo-verde";
}

export default CarrinhoCompras;