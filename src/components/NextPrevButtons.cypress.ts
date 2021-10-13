import { mount } from '@cypress/vue'
import NextPrevButtons from './NextPrevButtons.vue'
import stylesheet from '../main.css'

beforeEach(() => mount(NextPrevButtons, { stylesheet }))

it('should have 2 buttons', () => {
  cy.get('button').should('have.length', 2)

  cy.get('button:nth-of-type(1)').contains('dimension-hopping yarn cowgirl')
  cy.get('button:nth-of-type(2)').contains('birds of a feather')
})
