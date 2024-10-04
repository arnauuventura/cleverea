/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --

//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
declare global {
  namespace Cypress {
    interface Chainable {
      fillForm1(): Chainable<void>;
    }
  }
}
Cypress.Commands.add('fillForm1', () => {
  cy.get('input[formControlName = "nombre"]').type('Arnau');
  cy.get('input[formControlName="apellidos"]').type('Ventura');
  cy.get('input[formControlName="dniNie"]').type('12345678X');
  cy.get('button[type="submit"]').click();
});
