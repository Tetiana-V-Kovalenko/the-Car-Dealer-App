const getCurrentYear = () => new Date().getFullYear();

export const generateYearOptions = () => {
  const startYear = 2015;
  const currentYear = getCurrentYear();
  const years = [];
  for (let year = startYear; year <= currentYear; year++) {
    years.push(year);
  }
  return years;
};
