import { Tabs, Tab, Link } from '@nextui-org/react';
import { useState } from 'react';
import { ReservationDate } from './ReservationDate';
import { ReservationCountPerson } from './ReservationCountPerson';
import { ReservationType } from './ReservationType';

export const ReservationSteps = () => {
  const [selectedTab, setSelectedTab] = useState<string | number>('step1');
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectCountPerson, setSelectCountPerson] = useState<string | number>(
    0
  );
  const [type, setType] = useState<string | number>(0);
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
          <Link
            className="mt-2"
            size="sm"
            onPress={() => setSelectedTab('step2')}
          >
            Elegir Dia
          </Link>
        </Tab>

        <Tab key="step2" title="Horarios y Detalles">
          <ReservationCountPerson
            selectCountPerson={selectCountPerson}
            setSelectCountPerson={setSelectCountPerson}
          />
          <ReservationType type={type} setType={setType} />
        </Tab>

        <Tab key="step3" title="Confirmar" />
      </Tabs>
    </>
  );
};
