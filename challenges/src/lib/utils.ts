//math utils
export const factorial = (n: number) => {
  if (n < 0) throw new Error("Cannot compute factorial for negative number.");

  if (n === 0) return 1;

  return Array.from({ length: n }, (_, i) => i + 1).reduce(
    (acc, val) => acc * val,
    1
  );
};

export const gcd = (a: number, b: number): number => {
  return b === 0 ? Math.abs(a) : gcd(b, a % b);
};

export const fibonacci = (n: number): number => {
  if (n < 0) throw new Error("Number must be non-negative");

  if (n === 0 || n === 1) return 1;

  return fibonacci(n - 1) + fibonacci(n - 2);
};

//string utils
export const reverseStr = (str: string) => str.split("").reverse().join("");

export const capitaliseWords = (str: string) => {
  return str.replace(/\b\w/g, (char) => char.toUpperCase());
};

export const isPalindrome = (str: string) => {
  return (
    str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase() ===
    reverseStr(str).toLowerCase()
  );
};

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
