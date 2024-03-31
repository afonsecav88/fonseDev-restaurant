import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import { es } from 'date-fns/locale';
import { Card, CardBody, Divider } from '@nextui-org/react';
import { Dispatch } from 'react';

interface ReservationDateProps {
  selectedDate?: Date | undefined;
  setSelectedDate: Dispatch<React.SetStateAction<Date | undefined>>;
}

export const ReservationDate = ({
  selectedDate,
  setSelectedDate,
}: ReservationDateProps) => {
  let footer = <></>;

  const currentDate = new Date();
  if (selectedDate && currentDate > selectedDate) {
    footer = (
      <>
        <Divider className="mt-3" orientation="horizontal" />
        <p className="text-center mt-4 font-mono  text-green-400">
          Que día desea reservar ? <br />{' '}
        </p>
        <p className="text-center mt-4  text-red-400">
          Debe ser posterior a : <br /> {format(currentDate, 'PP')}.
        </p>
      </>
    );
  } else {
    footer = (
      <>
        <Divider className="mt-3" orientation="horizontal" />
        <p className="text-center mt-4 font-mono text-green-500 ">
          Has seleccionado este día: <br /> {format(selectedDate, 'PP')}.
        </p>
      </>
    );
  }

  return (
    <Card>
      <CardBody>
        <p className="text-center my-1 p-2 bg-orange-300 rounded-md text-sm font-semibold">
          Reserve con al menos un dia de antelación !
        </p>
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
