import { Tabs, Tab } from '@nextui-org/react';

export const ReservationSteps = () => {
  return (
    <div className="flex flex-col sm:flex-col md:flex-col">
      <Tabs color="primary" aria-label="Tabs steps" radius="full">
        <Tab key="step1" title="Seleccionar Fecha" />
        <Tab key="step2" title="Horarios y Detalles de la reserva" />
        <Tab key="steps3" title="Confirmación de la reserva" />
      </Tabs>
    </div>
  );
};
