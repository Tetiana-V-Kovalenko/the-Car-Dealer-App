export function isNumberArray(arr: any): arr is number[] {
  return Array.isArray(arr) && arr.every((n) => typeof n === "number");
}
