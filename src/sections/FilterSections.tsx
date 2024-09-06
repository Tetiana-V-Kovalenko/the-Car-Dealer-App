'use client';

import DropdownSelector from '@/components/DropdownSelector/DropdownSelector';
import { TVehicle } from '@/types/vehicle';
import { generateYearOptions } from '@/utils/generateYearsOption';
import Link from 'next/link';
import { useState } from 'react';

export const FilterSections = ({ data }: { data: TVehicle[] }) => {
  const [vehicle, setVehicle] = useState<TVehicle | null>(null);
  const [year, setYear] = useState<number | null>(null);
  return (
    <>
      <div className=" mt-[40px] container mx-auto p-4 flex justify-center items-center gap-4 bg-rose-50">
        <DropdownSelector
          variant={'vehicle'}
          data={data}
          onChange={(e) => setVehicle(typeof e === 'number' ? null : e)}
        />
        <DropdownSelector
          variant={'year'}
          data={generateYearOptions()}
          onChange={(e) => setYear(typeof e === 'number' ? e : null)}
        />
      </div>
      {vehicle && year && (
        <div className="text-3xl mx-auto mt-[50px] text-center h-[100px]">
          Your choice : {vehicle?.MakeName} {year} car of the year
          <br />
          If you are sure of your choice, click Next
        </div>
      )}
      <Link
        href={`/results/${vehicle?.MakeId}/${year}`}
        className={` mx-auto block w-fit  bg-blue-600 text-white text-3xl rounded hover:bg-blue-300 ${
          !vehicle || !year ? 'opacity-30 pointer-events-none' : ' mt-[100px] '
        }`}
        aria-disabled={!vehicle || !year ? 'true' : 'false'}
        tabIndex={!vehicle || !year ? -1 : undefined}
      >
        Next
      </Link>
    </>
  );
};
