class Logout {
    visit() {
        cy.visit('https://www.youtube.com'); // Visit YouTube homepage
    }

    signIn(email, password) {
        cy.get('button#button').contains('Sign in').click(); // Click the Sign in button
        cy.get('input[type="email"]').clear().type(email); // Enter email
        cy.get('#identifierNext').click(); // Click next after entering email
        cy.get('input[type="password"]').clear().type(password); // Enter password
        cy.get('#passwordNext').click(); // Click next to log in
    }

    clickProfileIcon() {
        cy.get('yt-icon-button#avatar-btn').click(); // Click on the profile icon
    }

    signOut() {
        cy.get('tp-yt-paper-item').contains('Sign out').click(); // Click the Sign out option
    }

    verifyLoggedOut() {
        cy.get('button#button').contains('Sign in').should('be.visible'); // Verify that the Sign in button is visible
    }
}

export default Logout;