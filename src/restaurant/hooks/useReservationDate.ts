import { useState, useEffect } from 'react';
import { selectDate } from '../reducer/ReservationActions';
import { useReservationContext } from './useReservationContext';

export const useReservationDate = () => {
  const { initialState, dispatch } = useReservationContext();
  const { selectedDate } = initialState;
  const [selected, setSelected] = useState<Date | undefined>(selectedDate);

  useEffect(() => {
    dispatch(selectDate(selected));
  }, [dispatch, selected]);

  return { dispatch, selected, setSelected, selectDate };
};
