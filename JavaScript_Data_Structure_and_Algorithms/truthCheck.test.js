const {truthCheck} = require('./truthcheck');

test("truth check", () => {
    const arr = [{name: "Quincy", role: "Founder", isBot: false}, 
    {name: "Naomi", role: "", isBot: false}, 
    {name: "Camperbot", role: "Bot", isBot: true}]
    expect(truthCheck(arr,  "isBot")).toBeFalsy();

    expect(truthCheck(arr, "name")).toBeTruthy()

})