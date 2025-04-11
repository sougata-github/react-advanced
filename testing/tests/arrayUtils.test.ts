import { describe, test, expect } from "vitest";

import {
  flattenArray,
  removeDuplicates,
  flattenAndRemoveDuplicates,
  intersectArray,
} from "./../src/lib/utils";

const nestedArray = [1, [2, 2], [3, 3, 4], 5];

const arr1 = [2, 4, 6, 8];
const arr2 = [6, 8, 10, 12];

describe("Array utils", () => {
  test("should flatten a nested array", () => {
    expect(flattenArray<number>(nestedArray)).toEqual([1, 2, 2, 3, 3, 4, 5]);
  });

  test("should remove duplicates from an array but maintain structure", () => {
    expect(removeDuplicates<number>(nestedArray)).toEqual([1, [2], [3, 4], 5]);
  });

  test("should flatten as well remove duplicates from an array", () => {
    expect(flattenAndRemoveDuplicates<number>(nestedArray)).toEqual([
      1, 2, 3, 4, 5,
    ]);
  });

  test("should return the intersection of two arrays", () => {
    expect(intersectArray(arr1, arr2)).toEqual([6, 8]);
  });
});
