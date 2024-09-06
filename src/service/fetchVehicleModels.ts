export const fetchVehicleModels = async (
  url: string,
  makeId: string,
  year: string
) => {
  const response = await fetch(
    `${url}/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json`
  );
  const data = await response.json();
  return data.Results;
};
