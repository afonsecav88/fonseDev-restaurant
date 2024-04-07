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
        <Tab key="step1" title="Fecha">
          <ReservationDate />
        </Tab>

        <Tab
          className="flex flex-col  sm:flex-row text-red-500"
          key="step2"
          title="Horarios y Detalles"
        >
          <div className="flex flex-col">
            <ReservationTurn />
            <ReservationSchedule />
            <ReservationCountPerson />
          </div>
          <ReservationDetails />
        </Tab>

        <Tab key="step3" title="Confirmar">
          <ReservationSummary />
        </Tab>
      </Tabs>
    </div>
  );
};
