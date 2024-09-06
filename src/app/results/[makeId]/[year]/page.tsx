import { BtnBack } from '@/components/BtnBack';
import { fetchVehicle } from '@/service/fetchVehicle';
import { fetchVehicleModels } from '@/service/fetchVehicleModels';
import { isModelArray } from '@/typeGuadrs/isModel';

import { Suspense } from 'react';

type StaticParams = {
  makeId: string;
  year: string;
};

export async function generateStaticParams() {
  const apiUrl = process.env.API_URL;
  if (!apiUrl) {
    throw new Error('API_URL is not defined in environment variables');
  }
  const posts = await fetchVehicle(apiUrl);
  return posts;
}

export default async function Year({ params }: { params: StaticParams }) {
  const apiUrl = process.env.API_URL;
  if (!apiUrl) {
    throw new Error('API_URL is not defined in environment variables');
  }
  const data = await fetchVehicleModels(apiUrl, params.makeId, params.year);
  if (!isModelArray(data)) {
    return <div>Error: Data is not valid.</div>;
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-[40px]  w-[90vw] mx-auto">
      <BtnBack />
      <Suspense>
        {data.map((model) => (
          <div
            key={model.Model_ID}
            className="p-4 border rounded  border-blue-900  hover:bg-blue-50"
          >
            <h2 className="text-lg font-semibold">{model.Make_Name}</h2>
            <h3 className="text-xl ">{model.Model_Name}</h3>
          </div>
        ))}
      </Suspense>
    </div>
  );
}
