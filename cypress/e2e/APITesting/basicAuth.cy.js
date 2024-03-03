describe("API Testing Using Cypress",()=>{
    
    it("Basic Auth",()=>{
        cy.request({
            method: "GET",
            url: "https://postman-echo.com/basic-auth",
            auth: {
                user: "postman",
                pass: "password"
            }
        })
        .then((response)=>{
            expect(response.status).to.eq(200)
            expect(response.body.authenticated).to.eq(true)
        })
    });
});