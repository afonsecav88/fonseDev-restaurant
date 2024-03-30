import { Tabs, Tab, Link } from '@nextui-org/react';
import { useState } from 'react';
import { ReservationDate } from './ReservationDate';
import { ReservationSchedule } from './ReservationSchedule';

export const ReservationSteps = () => {
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selected, setSelected] = useState<string | number>('step1');
  return (
    <>
      <p className="text-center mb-4 font-semibold text-blue-400">
        Etapas de la reservación
      </p>
      <Tabs
        selectedKey={selected}
        onSelectionChange={setSelected}
        color="success"
        aria-label="Tabs steps"
        radius="full"
      >
        <Tab key="step1" title="Fecha">
          <ReservationDate
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
          />
          <Link className="mt-2" size="sm" onPress={() => setSelected('step2')}>
            Elegir Dia
          </Link>
        </Tab>
        <Tab key="step2" title="Horarios y Detalles">
          <ReservationSchedule />
        </Tab>
        <Tab key="step3" title="Confirmar" />
      </Tabs>
    </>
  );
};
