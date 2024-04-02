export const useValidateReservationDetails = (
  selectedTurn: string | number,
  selectedSchedule: string | number,
  selectedCountPerson: string | number
): boolean => {
  return selectedCountPerson == '' ||
    0 ||
    selectedSchedule == '' ||
    0 ||
    selectedTurn == '' ||
    0
    ? false
    : true;
};
