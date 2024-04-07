import { Tabs, Tab } from '@nextui-org/react';

import {
  ReservationDate,
  ReservationTurn,
  ReservationDetails,
  ReservationSummary,
  ReservationSchedule,
  ReservationCountPerson,
} from './index';

import {} from '../hooks/';
import { useReservationContext } from '../hooks/useReservationContext';
import { selectTab } from '../reducer/ReservationActions';
import { Steps } from '../models/reservationData';

export const ReservationSteps = () => {
  const { initialState, dispatch } = useReservationContext();
  const { selectedTab } = initialState;

  const handleOnSelectionChange = () => {
    dispatch(selectTab(selectedTab));
  };

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
        <Tab key={Steps.Step1} title="Fecha">
          <ReservationDate />
        </Tab>

        <Tab
          className="flex flex-col  sm:flex-row text-red-500"
          key={Steps.Step2}
          title="Horarios y Detalles"
        >
          <div className="flex flex-col">
            <p className="text-center my-2 text-medium  text-red-400">
              Todo los campos son obligatorios
            </p>
            <ReservationTurn />
            <ReservationSchedule />
            <ReservationCountPerson />
          </div>
          <ReservationDetails />
        </Tab>

        <Tab key={Steps.Step3} title="Confirmar">
          <ReservationSummary />
        </Tab>
      </Tabs>
    </div>
  );
};
