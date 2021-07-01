describe("ce test",  () => {
    it("CloudEngage" , () =>{
        cy.visit("https://go.ice2.cloudengage.com/")
        cy.contains("Welcome Back").should("be.visible")
    })
    it("Chord.us" , () =>{
        cy.visit("https://chord.us/")
        cy.contains("Claim my domain!").should('be.visible')
    })
})