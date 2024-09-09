import { TModel } from '@/types/model';

export function isModel(obj: any | TModel): obj is TModel {
  return (
    typeof obj === 'object' &&
    obj !== null &&
    typeof obj.Make_ID === 'number' &&
    typeof obj.Make_Name === 'string' &&
    typeof obj.Model_ID === 'number' &&
    typeof obj.Model_Name === 'string'
  );
}
export function isModelArray(arr: any[] | TModel[]): arr is TModel[] {
  return Array.isArray(arr) && arr.every(isModel);
}
