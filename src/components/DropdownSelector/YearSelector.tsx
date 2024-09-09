'use client';
import { ChangeEvent } from 'react';
import { DropdownSelectorProps } from './DropdownSelector';
import { isNumberArray } from '@/typeGuadrs/isNumberArr';

export const YearSelector = ({ data, onChange }: DropdownSelectorProps) => {
  if (!isNumberArray(data)) {
    return <div>Error: Data is not valid.</div>;
  }

  const handleSelectYear = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedYear = parseInt(e.target.value);

    onChange(selectedYear || null);
  };

  return (
    <div>
      <label
        htmlFor="year"
        className="block text-lg font-medium text-blue-900 "
      >
        Select a year
      </label>
      <select
        id="year"
        name="years"
        onChange={handleSelectYear}
        className="mt-2 block w-fit h-[60px] py-2 px-3 border border-blue-600 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-blue-900 text-md"
      >
        <option value="" className="text-blue-600">
          -- Select Year --
        </option>
        {data.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
    </div>
  );
};
