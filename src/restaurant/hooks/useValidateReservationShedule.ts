import { useEffect, useState } from 'react';

export const useValidateReservationShedule = (
  selectedTurn: string | number,
  selectedSchedule: string | number,
  selectedCountPerson: string | number
) => {
  const [isValidateReservationDetails, setIsValidateReservationDetails] =
    useState(false);

  const validateReservationDetails =
    selectedCountPerson == '' ||
    0 ||
    selectedSchedule == '' ||
    0 ||
    selectedTurn == '' ||
    0
      ? false
      : true;

  useEffect(() => {
    setIsValidateReservationDetails(validateReservationDetails);
  }, [
    selectedCountPerson,
    selectedSchedule,
    selectedTurn,
    validateReservationDetails,
  ]);

  return {
    isValidateReservationDetails,
  };
};
