import { log } from "../../../src/util/log";

describe("log()", () => {
    it("should log a message to the console", () => {
        console.log = jest.fn();
        log('This is a test');
        expect(console.log).toHaveBeenCalledWith('This is a test');
    });
});
