import { Tabs, Tab, Link, Button } from '@nextui-org/react';
import { useState } from 'react';
import { ReservationDate } from './ReservationDate';
import { ReservationCountPerson } from './ReservationCountPerson';
import { ReservationTurn } from './ReservationTurn';
import { ReservationSchedule } from './ReservationSchedule';
import { useGetDayOfWeek } from '../hooks/useGetDayOfWeek';

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

  const dayOfWeek = useGetDayOfWeek(selectedDate);

  return (
    <>
      <p className="text-center mb-4 font-semibold text-blue-400">
        Etapas de la reservación
      </p>
      <Tabs
        selectedKey={selectedTab}
        onSelectionChange={setSelectedTab}
        color="success"
        aria-label="Tabs steps"
        radius="full"
      >
        <Tab key="step1" title="Fecha">
          <ReservationDate
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
          />

          <Button
            className="mt-2 p-4 h-10 bg-success-200 font-semibold"
            size="md"
            onPress={() => setSelectedTab('step2')}
          >
            Siguiente paso
          </Button>
        </Tab>

        <Tab key="step2" title="Horarios y Detalles">
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

          <Button
            className="mt-2 p-4 h-10 bg-success-200 text-slate-600 font-semibold"
            size="md"
            onPress={() => setSelectedTab('step3')}
          >
            Siguiente paso
          </Button>
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
    </>
  );
};
