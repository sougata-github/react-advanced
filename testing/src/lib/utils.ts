/* eslint-disable @typescript-eslint/no-explicit-any */
//math utils
export const add = (a: number, b: number) => a + b;
export const subtract = (a: number, b: number) => a - b;
export const multiply = (a: number, b: number) => a * b;
export const divide = (a: number, b: number) => {
  if (b === 0) throw new Error("Division by zero is not allowed");

  return Number(Math.floor(a / b).toFixed(0));
};

//string utils
export const toUpperCase = (str: string) => str.toUpperCase();
export const toLowerCase = (str: string) => str.toLowerCase();
export const reverseStr = (str: string) => str.split("").reverse().join("");
export const capitalise = (str: string) =>
  str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

//array utils
export const flattenArray = <T>(arr: (T | T[])[]): T[] => {
  const newArr: T[] = []; //reinitialised on every recursive call.

  arr.forEach((val) => {
    if (Array.isArray(val)) {
      //destructure sub array and then add to existing array
      newArr.push(...flattenArray(val));
    } else {
      newArr.push(val);
    }
  });

  return newArr;
};

//removes all duplicates but maintains structure
export const removeDuplicates = <T>(arr: (T | T[])[]): (T | T[])[] => {
  const newArr: (T | T[])[] = []; //reinitialised on every recursive call.

  arr.forEach((val) => {
    if (Array.isArray(val)) {
      //add sub arrays as well
      newArr.push(removeDuplicates(val) as T[]);
    } else {
      newArr.push(val);
    }
  });

  //remove top level duplicates
  return [...new Set(newArr)];
};

export const flattenAndRemoveDuplicates = <T>(arr: (T | T[])[]): T[] => {
  const flattenedArray = flattenArray(arr);

  return [...new Set(flattenedArray)];
};

export const intersectArray = (arr1: number[], arr2: number[]): number[] => {
  return arr1.filter((item) => arr2.includes(item));
};

//concat flattens one level and then adds values, but push adds values as it is.

//object utils

//will override common properties
export const mergeObjects = (
  obj1: Record<any, any>,
  obj2: Record<any, any>
): Record<any, any> => {
  return { ...obj1, ...obj2 };
};

export const deepClone = (obj: Record<any, any>): Record<any, any> => {
  return JSON.parse(JSON.stringify(obj));
};

export const deepEqual = (obj1: Record<any, any>, obj2: Record<any, any>) => {
  return JSON.stringify(obj1) === JSON.stringify(obj2);
};
