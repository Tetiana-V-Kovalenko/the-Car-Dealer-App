export const fetchVehicle = async (url: string) => {
  try {
    const response = await fetch(
      `${url}/GetMakesForVehicleType/car?format=json`
    );
    const data = await response.json();
    return data.Results;
  } catch (error) {
    console.error('Error fetching vehicle makes:', error);
  }
};
