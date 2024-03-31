export const useGetDayOfWeek = (date: Date | undefined) => {
  if (date == undefined) {
    return;
  }
  const dayOfWeek = date.getDay();
  return dayOfWeek;
};
