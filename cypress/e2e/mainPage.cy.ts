describe('Тесты главной страницы', () => {
  it('Переход на главную страницу', () => {
    cy.visit('http://localhost:3000');
    cy.get('[id=mainBlock]').should("exist")
  })
})

export {};