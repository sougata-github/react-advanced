import { describe, test, expect } from "vitest";

import { factorial, fibonacci, gcd } from "../src/lib/utils";

describe("Math utils", () => {
  test("Should return factorial of a number", () => {
    expect(factorial(5)).toBe(120);
    expect(factorial(0)).toBe(1);
    expect(() => factorial(-1)).toThrow(
      "Cannot compute factorial for negative number."
    );
  });

  test("Should return gcd of two numbers", () => {
    expect(gcd(56, 98)).toBe(14);
    expect(gcd(2, 4)).toBe(2);
    expect(gcd(2, 0)).toBe(2);
  });

  test("Should return fibonacci sum", () => {
    expect(fibonacci(5)).toBe(8); // 0,1,1,2,3
    expect(fibonacci(0)).toBe(1);
    expect(() => fibonacci(-1)).toThrow("Number must be non-negative");
  });
});
