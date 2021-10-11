import { mount } from '@cypress/vue'
import HelloWorld from './HelloWorld.vue'

beforeEach(() => {
  mount(HelloWorld)
})

it('shows the header', () => {
  cy.get('h1').contains('One Very Long Exasperated Sigh')
})
