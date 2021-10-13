describe('App', () => {
  it('loads OK', () => {
    cy.visit('/')
    cy.get('h1').contains('One Very Long Exasperated Sigh')
  })

  it('has purple', () => {
    cy.visit('/')

    cy.get('a').contains('Onto the show!').click()
    cy.get('h1').contains('purple', { matchCase: false })
  })
})
