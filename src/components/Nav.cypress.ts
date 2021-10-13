import { mount } from '@cypress/vue'
import Nav from './Nav.vue'
import stylesheet from '../main.css'

beforeEach(() => mount(Nav, { stylesheet }))

// we test for clicks in integration tests I guess
it('shows the home link', () => {
  cy.get('nav').get('router-link h1').contains('Complex Compendium')
})
