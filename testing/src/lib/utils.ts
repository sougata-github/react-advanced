export const add = (a: number, b: number) => a + b;
export const subtract = (a: number, b: number) => a - b;
export const multiply = (a: number, b: number) => a * b;

export const divide = (a: number, b: number) => {
  if (b === 0) throw new Error("Division by zero is not allowed");

  return Number(Math.floor(a / b).toFixed(0));
};
