import { describe, test, expect } from "vitest";

import {
  capitalise,
  reverseStr,
  toLowerCase,
  toUpperCase,
} from "./../src/lib/utils";

describe("String utils", () => {
  test("should return string in uppercase.", () => {
    expect(toUpperCase("hello")).toBe("HELLO");
  });

  test("should return string in lowercase.", () => {
    expect(toLowerCase("Hello")).toBe("hello");
  });

  test("should return reverse string.", () => {
    expect(reverseStr("hello")).toBe("olleh");
  });

  test("should return capitalised string.", () => {
    expect(capitalise("heLLo")).toBe("Hello");
  });
});
