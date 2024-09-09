'use client';


import { ChangeEvent } from 'react';
import { DropdownSelectorProps } from './DropdownSelector';
import { isVehicle, isVehicleArray } from '@/typeGuadrs/isVehicle';

export const VehicleSelector = ({ data, onChange }: DropdownSelectorProps) => {
  if (!isVehicleArray(data)) {
    return <div>Error: Data is not valid.</div>;
  }

  const handleSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedId = parseInt(e.target.value);
    const selected = data.find((item) => item.MakeId === selectedId);
    if (isVehicle(selected)) {
      onChange(selected);
    } else {
      onChange(null);
    }
  };
  return (
    <div>
      <label
        htmlFor="vehicle"
        className="block text-lg font-medium text-blue-900"
      >
        Select a car
      </label>
      <select
        id="vehicle"
        name="makes"
        onChange={handleSelect}
        className="mt-2 block w-fit h-[60px] py-2 px-3 border border-blue-600 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-blue-900 text-md"
      >
        <option value="" className="text-blue-600">
          -- Select --
        </option>
        {data.map((item) => (
          <option key={item.MakeId} value={item.MakeId}>
            {item.MakeName}
          </option>
        ))}
      </select>
    </div>
  );
};
