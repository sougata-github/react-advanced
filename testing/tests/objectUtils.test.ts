import { describe, test, expect } from "vitest";

import { deepClone, deepEqual, mergeObjects } from "./../src/lib/utils";

const obj1 = {
  name: "John Doe",
  age: "24",
};

const obj2 = {
  age: "25",
  email: "johndoe@example.com",
};

const obj = {
  a: "b",
  "1": {
    "2": "3",
  },
};

const mergedObject = {
  name: "John Doe",
  age: "25",
  email: "johndoe@example.com",
};

const clonedObject = {
  a: "b",
  "1": {
    "2": "3",
  },
};

const obj3 = {
  a: 1,
  b: { c: 2 },
};

const obj4 = {
  a: 1,
  b: { c: 3 },
};

describe("Object utils", () => {
  test("should merge two objects", () => {
    expect(mergeObjects(obj1, obj2)).toEqual(mergedObject);
  });

  test("should clone an object", () => {
    expect(deepClone(obj)).toEqual(clonedObject);
  });

  test("should return true if 2 objects are equal", () => {
    expect(deepEqual(obj3, obj4)).toBe(false);
  });
});
