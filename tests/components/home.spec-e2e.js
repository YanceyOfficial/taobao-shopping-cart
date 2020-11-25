// https://docs.cypress.io/api/introduction/api.html

describe('My First Test', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Visits the app root url', () => {
    cy.contains('.header_text', '购物车(12)')
    cy.contains('.activity_title', '本店活动')
    cy.contains('.activity_content', '满68元，享包邮')
    cy.contains('.low_stock_warning', '限购三件')
  })

  it('Visits the app root url', () => {})
})
