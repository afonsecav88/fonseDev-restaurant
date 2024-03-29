import { Tabs, Tab, Card, CardBody } from '@nextui-org/react';

export const ReservationSteps = () => {
  return (
    <Card className="mb-5">
      <CardBody>
        <p className="text-center mb-4 font-semibold text-blue-400">
          Etapas de la reservación
        </p>
        <Tabs color="success" aria-label="Tabs steps" radius="full">
          <Tab key="step1" title="Fecha" />
          <Tab key="step2" title="Horarios y Detalles" />
          <Tab key="steps3" title="Confirmar" />
        </Tabs>
      </CardBody>
    </Card>
  );
};
