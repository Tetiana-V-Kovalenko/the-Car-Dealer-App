export function isNumberArray(arr: any[] | number[]): arr is number[] {
  return Array.isArray(arr) && arr.every((n) => typeof n === 'number');
}
