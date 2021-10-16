const index = require("./index")
// @ponicode
describe("index.addLocationInfoToDasboard", () => {
    test("0", () => {
        let callFunction = () => {
            index.addLocationInfoToDasboard("Producer")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            index.addLocationInfoToDasboard("Manager")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            index.addLocationInfoToDasboard("Developer")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            index.addLocationInfoToDasboard("Architect")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            index.addLocationInfoToDasboard(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
