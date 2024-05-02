/// <reference types="cypress" />

describe('acesso a página inicial buguer eats', () => {
      beforeEach(() => {
        cy.visit('https://buger-eats.vercel.app/')
     })

      it.only('iniciar', () => {
        cy.get('a').click();
        cy.get(':nth-child(2) > :nth-child(2) > :nth-child(1) > input').type('Zane Silvia');
        cy.get(':nth-child(2) > :nth-child(2) > :nth-child(2) > input').type('02585245655');
        cy.get(':nth-child(3) > :nth-child(1) > input').type('zane@gmail.com');
        cy.get(':nth-child(3) > :nth-child(2) > input').type('67988885555');
        cy.get('.delivery-method > :nth-child(2)').click();
cy.get("[type='file']").selectFile('acesso conta.png', {force: true})
cy.get('.button-success').click();
cy.get(':nth-child(2) > :nth-child(1) > .alert-error').should('have.text','É necessário informar o CEP')
      }
        )
  }
      )