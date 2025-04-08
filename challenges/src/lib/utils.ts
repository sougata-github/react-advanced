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
