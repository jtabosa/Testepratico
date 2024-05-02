/// <reference types="cypress" />

describe('teste de vendas', () => {
        beforeEach(() => {
          cy.visit('https://www.saucedemo.com/')
       })
  
        it.only('iniciar', () => {
            cy.get('.login_logo').should('have.text','Swag Labs')
            cy.get('[data-test="username"]').type('standard_user');
            cy.get('[data-test="password"]').type('secret_sauce');
            cy.get('[data-test="login-button"]').click();
            cy.get('.title').should('have.text','Products')
            cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
            cy.get('[data-test="remove-sauce-labs-backpack"]').should('have.text','Remove')
            cy.get('.shopping_cart_link').click();
            cy.get('.title').should('have.text','Your Cart')
            cy.get('[data-test="continue-shopping"]').click();
            cy.get('.title').should('have.text','Products')
            cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
            cy.get('.shopping_cart_link').click();
            cy.get('[data-test="checkout"]').click();
            cy.get('.title').should('have.text','Checkout: Your Information')
            cy.get('[data-test="firstName"]').type('Alisson');
            cy.get('[data-test="lastName"]').type('Silva');
            cy.get('[data-test="postalCode"]').type('79015250');
            cy.get('[data-test="continue"]').click();
            cy.get('.title').should('have.text','Checkout: Overview')
            cy.get('[data-test="finish"]').click();
            cy.get('.complete-header').should('have.text','Thank you for your order!')
            cy.get('[data-test="back-to-products"]').click();
            cy.get('.title').should('have.text','Products')
        }
        )
    }
)