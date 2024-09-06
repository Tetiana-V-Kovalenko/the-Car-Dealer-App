import { TVehicle } from "@/types/vehicle";

export function isVehicle(obj: any): obj is TVehicle {
  return (
    typeof obj === "object" &&
    obj !== null &&
    typeof obj.MakeId === "number" &&
    typeof obj.MakeName === "string" &&
    typeof obj.VehicleTypeId === "number" &&
    typeof obj.VehicleTypeName === "string"
  );
}
export function isVehicleArray(arr: any): arr is TVehicle[] {
  return Array.isArray(arr) && arr.every(isVehicle);
}
