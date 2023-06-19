// login.spec.js or login.spec.ts
/// <reference types="Cypress" />

// Import any necessary commands or helpers here, if applicable
describe('Login and Signup', () => {
    beforeEach(() => {
      // Run any necessary setup before each test case
    });
  
    it('should allow a user to sign up and log in successfully', () => {
      // Test signup functionality
      cy.visit('/login'); // Adjust the URL if needed
  
      // Enter signup details
      cy.get('[data-testid=signup-username-input]').type('testuser');
      cy.get('[data-testid=signup-email-input]').type('test@example.com');
      cy.get('[data-testid=signup-password-input]').type('password123');
      cy.get('[data-testid=signup-button]').click();
  
      // Perform assertions after successful signup
  
      // Test login functionality
      cy.get('[data-testid=login-email-input]').type('test@example.com');
      cy.get('[data-testid=login-password-input]').type('password123');
      cy.get('[data-testid=login-button]').click();
  
      // Perform assertions after successful login
    });
  
    it('should display an alert for invalid login credentials', () => {
      // Test login with invalid credentials
      cy.visit('/login'); // Adjust the URL if needed
  
      // Enter invalid login details
      cy.get('[data-testid=login-email-input]').type('wrong@example.com');
      cy.get('[data-testid=login-password-input]').type('incorrect');
      cy.get('[data-testid=login-button]').click();
  
      // Perform assertions for alert message
    });
  
    // Add more test cases as needed
  });
  