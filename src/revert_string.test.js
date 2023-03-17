import { revertString } from "./revert_string.js";

describe("tests for revert_string function", () => {
  it("should reverse string", () => expect(revertString("abc")).toBe("cba"));
  it("should reverse string", () => expect(revertString("")).toBe("Строка пустая"));
});