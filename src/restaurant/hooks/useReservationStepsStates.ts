import { useState } from 'react';
import { ContactData } from '../models/contactData';

export const useReservationStepsStates = () => {
  const [selectedTab, setSelectedTab] = useState<string | number>('step1');
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(
    new Date()
  );
  const [selectedCountPerson, setSelectedCountPerson] = useState<
    string | number
  >(0);
  const [selectedTurn, setSelectedTurn] = useState<string | number>(0);
  const [selectedSchedule, setSelectedSchedule] = useState<string | number>(0);
  const [reservationDetails, setReservationDetails] = useState<ContactData>({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  return {
    selectedTab,
    setSelectedTab,
    selectedDate,
    setSelectedDate,
    selectedCountPerson,
    setSelectedCountPerson,
    selectedTurn,
    setSelectedTurn,
    selectedSchedule,
    setSelectedSchedule,
    reservationDetails,
    setReservationDetails,
  };
};
