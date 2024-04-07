import { useEffect, useState } from 'react';

export const useValidateReservationShedule = (
  selectedTurn: string | number,
  selectedSchedule: string | number,
  selectedCountPerson: string | number
) => {
  const [isValidDataSchedule, setIsValidDataSchedule] = useState(false);

  useEffect(() => {
    if (
      selectedTurn !== '' &&
      selectedSchedule !== '' &&
      selectedCountPerson !== ''
    )
      setIsValidDataSchedule(true);
    else {
      setIsValidDataSchedule(false);
    }
  }, [selectedCountPerson, selectedSchedule, selectedTurn]);

  return {
    isValidDataSchedule,
  };
};
