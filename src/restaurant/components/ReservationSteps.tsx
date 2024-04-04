import { Tabs, Tab, Button } from '@nextui-org/react';

import {
  ReservationDate,
  ReservationCountPerson,
  ReservationTurn,
  ReservationSchedule,
  ReservationDetails,
  ReservationSummary,
} from './index';

import {
  useGetDayOfWeek,
  useValidateReservationShedule,
  useReservationStepsStates,
} from '../hooks/';
import { useReservationContext } from '../hooks/useReservationContext';

export const ReservationSteps = () => {
  const {
    selectedTab,
    setSelectedTab,
    // selectedDate,
    // setSelectedDate,
    selectedCountPerson,
    setSelectedCountPerson,
    selectedTurn,
    setSelectedTurn,
    selectedSchedule,
    setSelectedSchedule,
    setReservationDetails,
    reservationDetails,
  } = useReservationStepsStates();

  const { initialState } = useReservationContext();
  const { selectedDate } = initialState;

  // const dayOfWeek = useGetDayOfWeek(selectedDate);
  // const validateDate = useValidateReservationDate(selectedDate);

  // console.log(dayOfWeek);

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
          // selectedDate={selectedDate}
          // setSelectedDate={setSelectedDate}
          />

          <Button
            className="mt-2 p-4 h-10 bg-success-200 font-semibold"
            size="md"
            // isDisabled={validateDate}
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
              // dayOfWeek={dayOfWeek}
            />
            <ReservationSchedule
              selectedSchedule={selectedSchedule}
              setSelectedSchedule={setSelectedSchedule}
              // dayOfWeek={dayOfWeek}
            />
            <ReservationCountPerson
              selectedCountPerson={selectedCountPerson}
              setSelectedCountPerson={setSelectedCountPerson}
            />
          </div>
          <ReservationDetails
            reservationDetails={reservationDetails}
            setReservationDetails={setReservationDetails}
            setSelectedTab={setSelectedTab}
            isValidateReservationDetails={isValidateReservationDetails}
          />
        </Tab>

        <Tab key="step3" title="Confirmar">
          <ReservationSummary
            selectedTurn={selectedTurn}
            selectedSchedule={selectedSchedule}
            selectedCountPerson={selectedCountPerson}
            selectedDate={selectedDate}
            reservationDetails={reservationDetails}
          />
        </Tab>
      </Tabs>
    </div>
  );
};
