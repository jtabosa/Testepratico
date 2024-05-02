/// <reference types="cypress" />

describe('acesso a página inicial buguer eats', () => {
        beforeEach(() => {
          cy.visit('https://buger-eats.vercel.app/')
       })

        it.only('iniciar', () => {
          cy.get('a').click();
          cy.get(':nth-child(2) > :nth-child(2) > :nth-child(1) > input').type('Zane Silvia');
          cy.get(':nth-child(2) > :nth-child(2) > :nth-child(2) > input').type('0258524565');
          cy.get(':nth-child(3) > :nth-child(1) > input').type('zane@gmail.com');
          cy.get(':nth-child(3) > :nth-child(2) > input').type('67988885555');
          cy.get(':nth-child(3) > :nth-child(2) > :nth-child(1) > input').type('79015250');
          cy.get(':nth-child(3) > :nth-child(2) > :nth-child(2) > input').click();
          cy.get(':nth-child(4) > :nth-child(1) > input').type('25');
          cy.get(':nth-child(4) > :nth-child(2) > input').type('casa 2');
          cy.get('.delivery-method > :nth-child(2)').click();
cy.get("[type='file']").selectFile('acesso conta.png', {force: true})
cy.get('.button-success').click();
cy.get('.alert-error').should('have.text','Oops! CPF inválido')
        }
          )
    }
        )