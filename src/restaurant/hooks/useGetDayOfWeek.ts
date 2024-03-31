export const useGetDayOfWeek = (date: Date) => {
  const dayOfWeek = date.getDay();
  return {
    dayOfWeek,
  };
};
