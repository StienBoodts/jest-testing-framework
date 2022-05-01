/**
 * @jest-environment jsdom
 */

 const buttonClick = require("../button");

 beforeEach(() => { //runs before each test cycle, sets up the mock DOM
    let fs = require("fs"); // node fs module: file system built into node. Allows us to open, store and read files.
    let fileContents = fs.readFileSync("index.html", "utf-8"); // reads content of index.html using utf-8 character set and stores it into the variable 'fileContents'
    // by default the tests run from the root directory, where index.html is
    document.open();
    document.write(fileContents);
    document.close();
});
 
 describe("DOM tests", () => {
     test("Expects p content to change", () => {
         buttonClick();
         expect(document.getElementById("par")
             .innerHTML).toEqual("You Clicked");
     });
     test("h1 should exist", () => {
         expect(document.getElementsByTagName('h1').length).toBe(1); //if a h1 exist the length of the returned array will be 1, if 2 exist it would be 2...
     })
 });