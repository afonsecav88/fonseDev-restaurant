import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import { es } from 'date-fns/locale';
import { Card, CardBody } from '@nextui-org/react';
import { Dispatch } from 'react';

interface ReservationDateProps {
  selectedDate: Date | undefined;
  setSelectedDate: Dispatch<React.SetStateAction<Date | undefined>>;
}

export const ReservationDate = ({
  selectedDate,
  setSelectedDate,
}: ReservationDateProps) => {
  let footer = (
    <p className="text-center mt-4  font-semibold text-red-300">
      Que día desea reservar ?
    </p>
  );
  if (selectedDate) {
    footer = (
      <p className="text-center mt-4 font-semibold text-green-500 ">
        Has seleccionado este día: <br /> {format(selectedDate, 'PP')}.
      </p>
    );
  }
  return (
    <Card>
      <CardBody>
        <DayPicker
          mode="single"
          selected={selectedDate}
          onSelect={setSelectedDate}
          footer={footer}
          locale={es}
        />
      </CardBody>
    </Card>
  );
};
