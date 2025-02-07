describe('Тесты главной страницы', () => {



  beforeEach(() => {
    cy.intercept('http://localhost:8000', (req) => {
      req.on('response', (res) => {
        expect(res.statusCode).equal(200)
      })
    })
  })

  beforeEach(() => {
    cy.visit('/');
  })

  // beforeEach(() => {
    // json-server db.json --port 8000
    // cy.exec('npx json-server --watch db.json --port 8000 --host 0.0.0.0', { timeout: 10000 });
  // });

  // before(() => {
  //   cy.exec('npx json-server --watch db.json --port 8000', { timeout: 10000 });
  // });

  // beforeEach(() => {
  //   cy.exec('npx json-server --watch db.json --port 8000', { timeout: 10000 });
  // });

  // after(() => {
  //   cy.exec('pkill -f "json-server"'); // Завершаем процесс json-server после тестов
  // });





  it('Переход на главную страницу', () => {
    cy.get('[id=mainBlock]').should("exist")
    // cy.login().then((data) => {
    //   cy.visit(`profile/${data.id}`);
    // });
  })


  it('Переход к продукции', () => {
    // cy.request('http://localhost:3200/products')
    // cy.request('https://ecc.dtechs.dev/api')
    cy.get('[aria-label="burger menu"]').click()
    cy.get('[aria-label="nav menu"]').should("exist")
    // cy.screenshot('меню навигации')
    cy.get('[aria-label="products"]').click()
    cy.get('[aria-label="last products"]').scrollIntoView()
    cy.get('[aria-label="last products"]').should("be.visible")
    cy.get('[id=pink]').should("be.visible")
    cy.get('[id=pink').click()
    cy.get('[aria-label="basket"]').scrollIntoView()
    cy.get('[aria-label="basket"]').should('have.text', "1")
    cy.get('[aria-label="basket"]').click()
    cy.get('[aria-label="Pink Headphone"]').should("be.visible")


  })

  it('Ошибка когда форма пустая', () => {
    cy.get('[id=regButton]').click()
    cy.get('[aria-label="error"]').should('have.text', "enter email")
  })

  it('Отправка email', () => {
    cy.get('[aria-label=email]').type('ex@example.com')
    cy.get('[id=regButton]').click()
    cy.get('[aria-label="error"]').should("be.hidden")
  })

})

export {};