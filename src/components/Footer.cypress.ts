import { mount } from '@cypress/vue'
import Footer from './Footer.vue'
import stylesheet from '../main.css'

beforeEach(() => mount(Footer, { stylesheet }))

it('shows the footer', () => {
  // Check for disclaimer
  cy.get('footer').get('p').contains('This is a work of fiction.')
  cy.get('footer')
    .get('p:nth-of-type(2)')
    .contains('Any resemblance to actual persons,')

  // Check for ownership
  cy.get('p:last-of-type').contains('(c) 2015 - ­2021 @nvrbovr')
})
