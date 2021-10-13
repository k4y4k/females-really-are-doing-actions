import { mount } from '@cypress/vue'
import Whobar from './Whobar.vue'
import stylesheet from '../main.css'

beforeEach(() => mount(Whobar, { stylesheet }))

describe('the main bar', () => {
  it('has the name and series icon', () => {
    cy.get('[data-testid=who-name]').contains('PURPLE')

    cy.get('[data-testid=who-icon]').contains('💌')
  })

  it('is always uppercase', () => {
    cy.get('[data-testid=who-name]').contains('PURPLE')
    cy.get('[data-testid=who-name]')
      .should('not.have.text', 'purple')
      .should('not.have.text', 'Purple')
  })
})

describe('the extended bar', () => {
  it('has at least one thing to say', () => {
    cy.get('[data-testid=info-expanded]').contains('p')
  })
})
