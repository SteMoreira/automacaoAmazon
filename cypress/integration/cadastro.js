describe('Acessar o site', () => {
    it('visitar a url', () => {
      cy.visit('https://www.amazon.com/');
  
  //Vocabulario para português
    cy.get('.icp-nav-link-inner').click();
    cy.contains('português').click();
    cy.get('.a-button-input').click();
    cy.get('#nav-link-accountList').click();
    cy.get('#nav-link-accountList-nav-line-1').click();
      
    
  // cadastro
    cy.get('#createAccountSubmit').click();
    cy.get('#ap_customer_name').type('stephany');
    cy.get('#ap_email').type('stephanymv123@gmail.com');
    cy.get('#ap_password').type('ste@123'); 
    cy.get('#ap_password_check').type('ste@123'); 
    cy.get('#continue').click();
      


















    })
  })