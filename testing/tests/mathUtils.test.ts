import { describe, it, test, expect } from "vitest";

import { add, divide, multiply, subtract } from "./../src/lib/utils";

describe("Math utilities", () => {
  it("Should sum two numbers", () => {
    expect(add(2, 3)).toBe(5);
    expect(add(-1, 1)).toBe(0);
  });

  test("Should subtract two numbers", () => {
    expect(subtract(2, 3)).toBe(-1);
    expect(subtract(-1, 1)).toBe(-2);
  });

  it("Should multiply two numbers", () => {
    expect(multiply(2, 3)).toBe(6);
    expect(multiply(-1, 1)).toBe(-1);
  });

  test("Should divide two numbers", () => {
    expect(divide(2, 3)).toBe(0);
    expect(divide(-1, 1)).toBe(-1);
  });

  it("should throw an error if second argument is zero", () => {
    //callback so that error is not thrown immediately so that test doesn't crash before it runs
    expect(() => divide(2, 0)).toThrow("Division by zero is not allowed");
  });
});
