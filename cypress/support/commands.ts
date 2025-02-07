// -- This is a parent command --

export const login = (
    username: string = 'testuser',
    password: string = '123',
) => {
  return cy
      .request({
        method: 'POST',
        url: 'http://localhost:8000/login',
        body: {
          username,
          password,
        },
      })
      .then(({ body }) => {
        window.localStorage.setItem(
            "USER_LOCALSTORAGE_KEY",
            JSON.stringify(body),
        );
        return body;
      });
};

Cypress.Commands.add('login', login)
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
declare global {
  namespace Cypress {
    interface Chainable {
      login(email?: string, password?: string): Chainable<{id: string}>
      drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
      dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
      visit(originalFn: CommandOriginalFn<any>, url: string, options: Partial<VisitOptions>): Chainable<Element>
    }
  }
}

export {};