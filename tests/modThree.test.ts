import {modThree} from '../src/modThree';

describe("modThree function", () => {
    it("should correctly compute mod 3 for '110", () => {
        expect(modThree("110")).toBe(0);
    });

    it("should correctly compute mod 3 for '1010", () => {
        expect(modThree("1010")).toBe(1);
    });

    it("should correctly compute mod 3 for '1101'", () => {
        expect(modThree("1101")).toBe(1);
    });
    
    it("should correctly compute mod 3 for '1110'", () => {
        expect(modThree("1110")).toBe(2);
    });
    
    it("should correctly compute mod 3 for '1111'", () => {
        expect(modThree("1111")).toBe(0);
    });

    //Edge cases

    it("should throw an error for an empty input", () => {
        expect(() => modThree("")).toThrow("Input must be a binary string");
    });
    
    it("should throw an error for invalid input", () => {
        expect(() => modThree("1021")).toThrow("Input must be a binary string");
    });
});