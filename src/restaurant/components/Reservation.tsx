import { useState } from 'react';

import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import { es } from 'date-fns/locale';

export const Reservation = () => {
  const [selected, setSelected] = useState<Date>();

  let footer = <p className="text-center mt-4">Que día desea reservar ?</p>;
  if (selected) {
    footer = (
      <p className="text-center mt-4 font-semibold text-green-500 ">
        Has seleccionado este día: <br /> {format(selected, 'PP')}.
      </p>
    );
  }
  return (
    <DayPicker
      mode="single"
      selected={selected}
      onSelect={setSelected}
      footer={footer}
      locale={es}
    />
  );
};
