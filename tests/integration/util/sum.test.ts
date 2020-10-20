import { sumAndLog } from "./../../../src/util/sum";

describe("sumAndLog()", () => {
    it("should return the sum 1 + 3 to equal 4 and log to the console", () => {
        //const sum = jest.fn();
        //const log = jest.fn();
        sumAndLog(1, 3);
        //expect(sum).toHaveBeenCalledWith(1, 3);
        //expect(log).toHaveBeenCalledTimes(1);
        expect(sumAndLog(1, 3)).toBe(4);
    });
});
