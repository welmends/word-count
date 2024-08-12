import wordCounter from "./wordCounter";

describe("wordCounter", () => {
  test("returns 0 for an empty string", () => {
    expect(wordCounter("")).toBe(0);
  });

  test("returns the correct count for a string with words", () => {
    expect(wordCounter("Hello world")).toBe(2);
  });

  test("returns the correct count for string with multiple spaces", () => {
    expect(wordCounter("  Hello   world  ")).toBe(2);
  });

  test("returns the correct count for string with for string with line breaks", () => {
    expect(wordCounter("Hello\nworld")).toBe(2);
  });

  test("returns the correct count for string with multiple line breaks", () => {
    expect(wordCounter("Hello\n\nworld")).toBe(2);
  });

  test("returns the correct count for string with mixed spaces and line breaks", () => {
    expect(wordCounter(" Hello \n world ")).toBe(2);
  });

  test("returns the correct count for strings with only spaces or line breaks", () => {
    expect(wordCounter("   ")).toBe(0);
    expect(wordCounter("\n\n")).toBe(0);
  });
});
