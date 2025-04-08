import { describe, test, expect } from "vitest";

import { capitaliseWords, isPalindrome, reverseStr } from "./../src/lib/utils";

describe("String utils", () => {
  test("should return reversed string.", () => {
    expect(reverseStr("hello")).toBe("olleh");
  });

  test("should return capitalised string.", () => {
    expect(capitaliseWords("hello my name is john Doe.")).toBe(
      "Hello My Name Is John Doe."
    );
  });

  test("should check if string is palindrome.", () => {
    expect(isPalindrome("hello")).toBe(false);
    expect(isPalindrome("aba")).toBe(true);
  });
});
