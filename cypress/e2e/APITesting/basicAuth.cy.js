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

    const token = "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"
    it("Github Authentication",()=>{
        cy.request({
            method: "GET",
            url: "https://api.github.com/user/repos",
            headers: {
                Authorization: "Bearer "+token
            }
        })
        .then((response)=>{
            expect(response.status).to.eq(200)
        })
    });

    it("API Key Auth",()=>{
        cy.request({
            method: "GET",
            url: "api.openweaathermap.org/data/2.5/forecast/daily?q=Delhi",
            qs:{
                appid: "c299a95fc017b92029b3b13046f8a671"
            }
        })
        .then((response)=>{
            expect(response.status).to.eq(200)
        })
    });
});