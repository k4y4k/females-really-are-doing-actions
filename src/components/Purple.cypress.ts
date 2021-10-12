import { mount } from '@cypress/vue'
import Purple from './Purple.vue'
import stylesheet from '../main.css'

beforeEach(() => mount(Purple, { stylesheet }))

it('has an image and the name in the background', () => {
  cy.get('[data-testid=hero-image]')

  cy.get('[data-testid=hero-name]').contains('Purple')
})

it('has the navbar and the information bar', () => {
  cy.get('nav h1').contains('Complex Compendium')
  cy.get('[data-testid=info-bar]').contains('PURPLE')
})
