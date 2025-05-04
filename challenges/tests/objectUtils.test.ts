import { describe, test, expect } from "vitest";

import { deepClone, deepFlatten, deepMerge } from "./../src/lib/utils";

const obj1 = {
  a: 1,
  b: {
    x: 2,
  },
};

const obj2 = {
  b: { y: 3 },
  c: 4,
};

const mergedObject = {
  a: 1,
  b: {
    x: 2,
    y: 3,
  },
  c: 4,
};

const clonedObject = {
  a: 1,
  b: {
    x: 2,
  },
};

const obj3 = {
  a: 1,
  b: { c: 2, d: { e: 3 } },
};

const flattenedObject = {
  a: 1,
  "b.c": 2,
  "b.d.e": 3,
};

describe("Object utils", () => {
  test("should merge two objects", () => {
    expect(deepMerge(obj1, obj2)).toEqual(mergedObject);
  });

  test("should clone an object", () => {
    expect(deepClone(obj1)).toEqual(clonedObject);
  });

  test("should flatten an object", () => {
    expect(deepFlatten(obj3)).toEqual(flattenedObject);
  });
});
