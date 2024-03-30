import { Tabs, Tab, Card, CardBody, Link } from '@nextui-org/react';
import { useState } from 'react';

export const ReservationSteps = () => {
  const [selected, setSelected] = useState<string | number>('step1');
  console.log(selected);
  return (
    <Card className="mb-5">
      <CardBody>
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
          <Tab key="step1" title="Fecha" />
          <Tab key="step2" title="Horarios y Detalles" />
          <Tab key="step3" title="Confirmar" />
        </Tabs>
        <Link className="mt-2" size="sm" onPress={() => setSelected('step2')}>
          Elegir Dia
        </Link>
      </CardBody>
    </Card>
  );
};
