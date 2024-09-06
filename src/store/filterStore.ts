import { TVehicle } from "@/types/vehicle";
import { create } from "zustand";

type FilterStore = {
  vehicle: null | TVehicle;
  year: number | null;
  setVehicle: (vehicle: TVehicle | null) => void;
  setYear: (year: number | null) => void;
};
export const useFilterStore = create<FilterStore>((set) => ({
  vehicle: null,
  year: null,
  setVehicle: (vehicle) => set({ vehicle: vehicle }),
  setYear: (year) => set({ year: year }),
}));
