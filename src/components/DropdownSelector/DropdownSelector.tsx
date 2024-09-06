import { TVehicle } from "@/types/vehicle";
import { YearSelector } from "./YearSelector";
import { VehicleSelector } from "./VehicleSelector";

export type DropdownSelectorProps = {
  data: TVehicle[] | number[];
  onChange: (value: TVehicle | number | null) => void;
};

const dropdownSelectorComponents = new Map();
dropdownSelectorComponents.set("vehicle", VehicleSelector);
dropdownSelectorComponents.set("year", YearSelector);

const DropdownSelector = ({
  variant,
  ...restProps
}: { variant: string } & DropdownSelectorProps) => {
  const NeededComponent = dropdownSelectorComponents.get(variant);
  return <NeededComponent {...restProps} />;
};
export default DropdownSelector;
