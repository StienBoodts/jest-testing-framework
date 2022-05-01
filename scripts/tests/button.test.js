/**
 * @jest-environment jsdom
 */

 const buttonClick = require("../button");

 beforeEach(() => { //runs before each test cycle, sets up the mock DOM
     document.body.innerHTML = "<p id='par'></p>";
 });
 
 describe("DOM tests", () => {
     test("Expects p content to change", () => {
         buttonClick();
         expect(document.getElementById("par")
             .innerHTML).toEqual("You Clicked");
     });
 });