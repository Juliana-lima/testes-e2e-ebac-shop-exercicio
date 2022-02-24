/// <reference types="cypress" />

import CheckoutPage from "../support/page_objects/checkout.page";

context("Exercicio - Testes End-to-end - Fluxo de pedido", () => {
  /*  Como cliente 
        Quero acessar a Loja EBAC 
        Para fazer um pedido de 4 produtos 
        Fazendo a escolha dos produtos
        Adicionando ao carrinho
        Preenchendo todas opções no checkout
        E validando minha compra ao final */

  beforeEach(() => {
    cy.visit("minha-conta/");
    cy.fixture("perfil").then((dados) => {
      cy.login(dados.usuario, dados.senha);
    });
  });

  it("Deve fazer um pedido na loja Ebac Shop de ponta a ponta", () => {
    cy.get("#primary-menu > .menu-item-629 > a").click();
    cy.addProdutos("Atomic Endurance Running Tee (V-neck)", "S", "Blue", 2);

    cy.get("#primary-menu > .menu-item-629 > a").click();

    cy.addProdutos("Autumn Pullie", "L", "Purple", 2);
    cy.get(".dropdown-toggle > .mini-cart-items").should("contain", 4);

    cy.get(".woocommerce-message > .button");

    CheckoutPage.realizandoCheckout(
      "Maria",
      "Testadora",
      "EBAC",
      "Brasil",
      "Av. São Carlos",
      560,
      "Queimados",
      "Rio de Janeiro",
      "25410-870",
      "21-27915656",
      "mariatest@teste.com"
    );

    cy.get('.woocommerce-notice').should('contain', 'Obrigado. Seu pedido foi recebido.')
  });
});
