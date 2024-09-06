import { FilterSections } from '@/sections/FilterSections';
import { fetchVehicle } from '@/service/fetchVehicle';

export default async function Home() {
  const apiUrl = process.env.API_URL;
  if (!apiUrl) {
    throw new Error('API_URL is not defined in environment variables');
  }
  const data = await fetchVehicle(apiUrl);

  return (
    <div className="">
      <h1 className="text-4xl mx-auto mt-[50px] text-center">
        Hi! Please select the desired car and year
      </h1>
      <FilterSections data={data} />
    </div>
  );
}
