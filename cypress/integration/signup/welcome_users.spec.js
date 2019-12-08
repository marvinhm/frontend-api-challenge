  import React from 'react';
  
  describe("Sign up Welcome", () => {
  it("Users should find a greeting when they visit", () => {
    cy.visit("http://localhost:3000");

    cy.get('h1')
      .should('contain', 'Welcome to Chitter...');
    });
  });

  describe("Sign up prompt", () => {
    it("On hitting signup users should find a signup header", () => {
  
      cy.get("[data-test='signupButton']")
        .click()
        .should('contain', 'Signup');
    });
  });