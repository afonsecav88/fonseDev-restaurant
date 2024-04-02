export const useValidateReservationDate = (selectedDate: Date | undefined) => {
  if (selectedDate == undefined) return;
  const currentDate = new Date();
  return (selectedDate && currentDate) > selectedDate;
};
