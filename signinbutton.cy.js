class HomePagesigninbutton {
    visitHomePage() {
      cy.visit('https://www.youtube.com');
    }
  
    getSignInButton() {
      return cy.get('a[href*="accounts.google.com"]'); // Adjust selector as needed
    }
  
    clickSignIn() {
      this.getSignInButton().click();
    }
  }
  
  export default HomePagesigninbutton;