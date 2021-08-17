/// <reference types="cypress" />

const REVERSED_SPIDER_SOLITAIRE_URL = 'https://radiant-spire-02907.herokuapp.com/';

describe('piles-tests', () => {

    beforeEach(() => {
        cy.visit(REVERSED_SPIDER_SOLITAIRE_URL)
    })

    it('should find piles without cards before starting the game', () => {
        cy.get('.piles').should('exist')
        cy.get('.pile').find('.card').should('not.exist')
    })

    it('should find piles with cards after starting the game', () => {
        cy.get('.button--newGame').click()
        cy.get('.pile').find('.card').should('exist')
    })

    it('should select cards', () => {
        cy.get('.button--newGame').click()
        cy.get('.pile').find('.card').should('exist')
        cy.get('.pile').find('.card--selected').should('not.exist')
        cy.get('.piles').find('.flipper-wrap').not('.flipper-wrap--reversed:first').click()
        cy.get('.pile').find('.card--selected').should('exist')
    })

    
})