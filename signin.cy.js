// // /*class signin{
// //     url_signin(){
// //         cy.visit('https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Fwww.youtube.com%2Fsignin%3Faction_handle_signin%3Dtrue%26app%3Ddesktop%26hl%3Den%26next%3D%252F&hl=en&passive=false&service=youtube&uilel=0&flowName=GlifWebSignIn&flowEntry=AddSession&dsh=S687911330%3A1731672427043451&ddm=1');
// //         //cy.get('#buttons').click()

// //     }
// //     signin_withcedentials(){
// //         //cy.origin('https://accounts.google.com/v3/signin/challenge/pwd?TL=AKOx4s3OyOYMm0MybjSBagYfoU1Ywin-vHtE8a2CKXKpHgEkGfDrJwcB22aqgifb&cid=3&continue=https%3A%2F%2Fadmin.google.com%2F&flowName=GlifWebSignIn&ifkv=AcMMx-c58bgzjP4ve1xuPD25OyDqTG-gOzkOPphqtlQxs9gGPfqAlHmwTpSm62qjaZ8_O69und7BVA&osid=1&rart=ANgoxcfCWXO-UxaFnu8ji-j6S-jr_-j90PKypYWvRXJUUrNU3AB1Fi9Mmz2Ip1_Ynwd4KZ30PUbPopZ8GVagzNwhcYL2okNDXQzZEGdkUt7an3MG-3Jn1JQ&rpbg=1&sarp=1', () => {      
// //       cy.get('#identifierId').type('shaiktanzeelas@gmail.com')
// //         cy.get("#identifierNext").click()

// //         cy.xpath("//span[normalize-space()='Try another way']").click()
// //         cy.get('#yDmH0d').click()
        
// //         cy.get('[type="password"]').type('Tanzeela123$')
// //         cy.get('#passwordNext').click()
// //     }
// //     }

// // export default signin

// // class signin{
// //    url_signin(){

// //         cy.visit('https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Fwww.youtube.com%2Fsignin%3Faction_handle_signin%3Dtrue%26app%3Ddesktop%26hl%3Den%26next%3D%252F&hl=en&passive=false&service=youtube&uilel=0&flowName=GlifWebSignIn&flowEntry=AddSession&dsh=S687911330%3A1731672427043451&ddm=1');
// //         cy.get('#identifierId').type('shaiktanzeelas@gmail.com');
// //         cy.get('#identifierNext > div > button > span').click();
// //     }
// //     forget(){

    
// //         cy.visit('https://accounts.google.com/signin/v2/usernamerecovery?continue=https%3A%2F%2Fwww.youtube.com%2Fsignin%3Faction_handle_signin%3Dtrue%26app%3Ddesktop%26hl%3Den%26next%3D%252F&ddm=1&dsh=S687911330%3A1731672427043451&flowEntry=AddSession&flowName=GlifWebSignIn&hl=en&service=youtube')
// //         cy.get('#recoveryIdentifierId').type('Tanzeela123#$')
// //         cy.get('#queryPhoneNext > div > button > span').click()
// //         cy.get('#firstName').type('Tanzeela')
// //         cy.get('#lastName').type('Shaik')
// //         cy.get('#collectNameNext > div > button > span').click()
// //         cy.get('#recoveryIdentifierId').type('shaiktanzeelas@gmail.com')

// //     }
// // }

// // export default signin
// // */
// // class signin{

// //     url_signin(){
// //     cy.visit('https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Fwww.youtube.com%2Fsignin%3Faction_handle_signin%3Dtrue%26app%3Ddesktop%26hl%3Den-IN%26next%3Dhttps%253A%252F%252Fwww.youtube.com%252F&ddm=1&ec=65620&flowEntry=ServiceLogin&flowName=GlifWebSignIn&hl=en-IN&ifkv=AcMMx-fs7LkUysVyO9NGELunxQC02pJbbt-vRnUpH2kJFw54jTa52MWtSeKdbPg35edFatJ7FWbnLw&passive=true&service=youtube&uilel=3')
// //    }
// //    signin_withcredentials(){
// //     cy.get('#identifierId').type('shaiktanzeelas@gmail.com');
// // cy.get('#identifierNext > div > button > span').click();
// // cy.xpath('/html/body/div[1]').click()
// // //cy.xpath('body > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > c-wiz:nth-child(13) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > form:nth-child(1) > span:nth-child(1) > section:nth-child(2) > div:nth-child(2) > div:nth-child(1) > section:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(2) > div:nth-child(1)').click()
// // cy.get('[type="password"]').type('Tanzeela123$')
// // cy.wait(4000)
// // cy.get('#passwordNext').click()
// // }
// // }
// // export default signin


// class SignInPage {
//     enterEmail(email) {
//       cy.get('input[type="email"]').type(email);
//       cy.get('#identifierNext').click();
//     }
  
//     enterPassword(password) {
//       cy.get('input[type="password"]', { timeout: 10000 }).should('be.visible').type(password);
//       cy.get('#passwordNext').click();
//     }
  
//     verifySuccessfulLogin() {
//       cy.get('button[aria-label*="Account"]').should('be.visible'); // Validate account icon is present
//     }
//   }
  
//   export default SignInPage;
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