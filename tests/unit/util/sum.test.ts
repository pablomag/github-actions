import { sum } from "../../../src/util/sum";

describe("sum()", () => {
    it("should return the sum 1 + 3 to equal 4", () => {
        expect(sum(1, 3)).toBe(4);
    });
});
