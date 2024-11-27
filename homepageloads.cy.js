class PageLoads{
    visiturl(){
  // Step 1: Visit the YouTube homepage
  cy.visit('https://www.youtube.com');
    }
  title(){
  // Step 2: Verify the page title
  cy.title().should('include', 'YouTube'); // Checks if the title contains 'YouTube'
  }

  logo(){
  // Step 3: Verify that the YouTube logo is visible
  cy.get('#logo-icon').should('be.visible'); // Logo check
  }
   searchbar(){
  // Step 4: Verify that the search bar is visible
  cy.get('input#search').should('be.visible'); // Search bar check
   }

   signinbutton(){
  // Step 5: Verify that the Sign-In button is visible
  cy.contains('Sign in').should('be.visible'); // Sign-in button check

   }      
    }
    
export default PageLoads;