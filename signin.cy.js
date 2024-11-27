
class LoginPage {
  visitYouTube() {
    cy.visit('https://www.youtube.com');
  }

  clickSignInButton() {
    // Updated selector for the Sign In button
    cy.get('#buttons > ytd-button-renderer.style-scope > yt-button-shape > .yt-spec-button-shape-next > yt-touch-feedback-shape > .yt-spec-touch-feedback-shape > .yt-spec-touch-feedback-shape__fill').contains('Sign in').click();
    cy.wait(4000);
  }

  enterEmail(email) {
    cy.get('input[type="email"]').type(email);
    cy.get('button').contains('Next').click();
  }

  enterPassword(password) {
    cy.get('input[type="password"]').type(password);
    cy.get('button').contains('Next').click();
  }

  verifyLoginSuccess() {
    cy.get('button#avatar-btn').should('be.visible'); // Checks if user avatar is visible after login
  }
}

export default LoginPage;
