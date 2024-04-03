import { Tabs, Tab, Button } from '@nextui-org/react';
import { useEffect, useState } from 'react';
import { ReservationDate } from './ReservationDate';
import { ReservationCountPerson } from './ReservationCountPerson';
import { ReservationTurn } from './ReservationTurn';
import { ReservationSchedule } from './ReservationSchedule';
import { useGetDayOfWeek } from '../hooks/useGetDayOfWeek';
import { ReservationDetails } from './ReservationDetails';
import { ContactData } from '../shared/models/contactData';
import { useValidateReservationDate } from '../hooks/useValidateReservationDate';
import { useValidateReservationShedule } from '../hooks/useValidateReservationShedule';

export const ReservationSteps = () => {
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
  const dayOfWeek = useGetDayOfWeek(selectedDate);
  const validateDate = useValidateReservationDate(selectedDate);
  const { isValidateReservationDetails } = useValidateReservationShedule(
    selectedTurn,
    selectedSchedule,
    selectedCountPerson
  );

  return (
    <div className="flex flex-col items-center pl-8">
      <p className="text-center mb-2 font-semibold text-blue-400">
        Etapas de la reservación
      </p>

      <Tabs
        className="py-5"
        selectedKey={selectedTab}
        onSelectionChange={setSelectedTab}
        color="success"
        aria-label="Tabs steps"
        radius="full"
        // isDisabled={true}
      >
        <Tab key="step1" title="Fecha">
          <ReservationDate
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
          />

          <Button
            className="mt-2 p-4 h-10 bg-success-200 font-semibold"
            size="md"
            isDisabled={validateDate}
            onPress={() => setSelectedTab('step2')}
          >
            Siguiente paso
          </Button>
        </Tab>

        <Tab
          className="flex flex-col  sm:flex-row text-red-500"
          key="step2"
          title="Horarios y Detalles"
        >
          <div className="flex flex-col">
            <ReservationTurn
              selectedTurn={selectedTurn}
              setSelectedTurn={setSelectedTurn}
              dayOfWeek={dayOfWeek}
            />
            <ReservationSchedule
              selectedSchedule={selectedSchedule}
              setSelectedSchedule={setSelectedSchedule}
              dayOfWeek={dayOfWeek}
            />
            <ReservationCountPerson
              selectedCountPerson={selectedCountPerson}
              setSelectedCountPerson={setSelectedCountPerson}
            />
          </div>
          <ReservationDetails
            setReservationDetails={setReservationDetails}
            setSelectedTab={setSelectedTab}
            isValidateReservationDetails={isValidateReservationDetails}
          />
        </Tab>

        <Tab key="step3" title="Confirmar">
          <Button
            className="mt-2 p-4 h-10 bg-success-200 text-slate-600 font-semibold"
            size="md"
            onPress={() => setSelectedTab('step3')}
          >
            Confirmar Reserva
          </Button>
        </Tab>
      </Tabs>
    </div>
  );
};
