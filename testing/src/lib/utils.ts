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
