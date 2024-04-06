import { Tabs, Tab } from '@nextui-org/react';

import {
  ReservationDate,
  ReservationCountPerson,
  ReservationTurn,
  ReservationSchedule,
  ReservationDetails,
  ReservationSummary,
} from './index';

import {
  useValidateReservationShedule,
  useReservationStepsStates,
} from '../hooks/';
import { useReservationContext } from '../hooks/useReservationContext';
import { selectTab } from '../reducer/ReservationActions';

export const ReservationSteps = () => {
  const {
    setSelectedTab,
    selectedCountPerson,
    setSelectedCountPerson,
    selectedTurn,
    setSelectedTurn,
    selectedSchedule,
    setReservationDetails,
    reservationDetails,
  } = useReservationStepsStates();

  const { initialState, dispatch } = useReservationContext();
  const { selectedDate, selectedTab } = initialState;

  const { isValidateReservationDetails } = useValidateReservationShedule(
    selectedTurn,
    selectedSchedule,
    selectedCountPerson
  );

  const handleOnSelectionChange = () => {
    dispatch(selectTab(selectedTab));
  };

  console.log('selectedTab:', selectedTab);
  return (
    <div className="flex flex-col items-center pl-8">
      <p className="text-center mb-2 font-semibold text-blue-400">
        Etapas de la reservación
      </p>

      <Tabs
        className="py-5"
        selectedKey={selectedTab}
        onSelectionChange={handleOnSelectionChange}
        color="success"
        aria-label="Tabs steps"
        radius="full"
      >
        <Tab key="step1" title="Fecha">
          <ReservationDate />
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
            />
            <ReservationSchedule />
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
