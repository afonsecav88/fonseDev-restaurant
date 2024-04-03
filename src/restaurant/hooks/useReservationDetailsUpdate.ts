import { Dispatch, useEffect } from 'react';
import { ContactData } from '../shared/models/contactData';

export const UseReservationDetailsUpdate = (
  data: ContactData,
  setState: Dispatch<React.SetStateAction<ContactData>>
) => {
  useEffect(() => {
    setState(data);
  }, [data, setState]);
};
