/// <reference types="cypress" />

describe('Navigation', () => {
  beforeEach(() => {
    cy.login();
    cy.visit('/');
  });

  afterEach(() => {
    cy.logout();
  });

  it('navbar is loaded', () => {
    cy.get('header').contains('Households');
  });


  it('cy.go() - go back or forward in the browser\'s history', () => {
    cy.visit('/my-chores');
    cy.visit('/households');

    cy.location('pathname').should('include', 'households')

    cy.go('back')
    cy.location('pathname').should('not.include', 'households')

    cy.go('forward')
    cy.location('pathname').should('include', 'households')

    // clicking back
    cy.go(-1)
    cy.location('pathname').should('not.include', 'households')

    // clicking forward
    cy.go(1)
    cy.location('pathname').should('include', 'households')
  });

  it('cy.reload() - reload the page', () => {
    cy.reload()

    // reload the page without using the cache
    cy.reload(true)
  });

  it('cy.visit() - visit a remote url', () => {
    // Pass options to the visit
    cy.visit('/my-chores', {
      timeout: 50000, // increase total time for the visit to resolve
      onBeforeLoad(contentWindow) {
        // contentWindow is the remote page's window object
        expect(typeof contentWindow === 'object').to.be.true
      },
      onLoad(contentWindow) {
        // contentWindow is the remote page's window object
        expect(typeof contentWindow === 'object').to.be.true
      },
    });
  });

  it('navigates to the my-chores page', () => {
    cy.get('header').contains('My-chores').click();
    cy.location('pathname').should('include', 'my-chores');
  });

  it('navigates to the households page', () => {
    cy.get('header').contains('Households').click();
    cy.location('pathname').should('include', 'households');
  });

  it('navigates to the profile page', () => {
    cy.get('[data-testid="settings-button"]').click().then(() => {
      cy.get('[data-testid="settings-menu"]').contains('Profile').click();
      cy.location('pathname').should('include', 'profile');
    });
  });
})
