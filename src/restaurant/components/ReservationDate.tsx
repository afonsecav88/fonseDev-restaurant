import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import { es } from 'date-fns/locale';
import { Button, Card, CardBody, Divider } from '@nextui-org/react';
import { useReservationContext } from '../hooks/useReservationContext';
import { useState } from 'react';
import { selectTab } from '../reducer/ReservationActions';
// import { useReservationStepsStates } from '../hooks';

export const ReservationDate = () => {
  const [selected, setSelected] = useState<Date>(new Date());
  const { dispatch } = useReservationContext();

  // const { selectedTab, setSelectedTab } = useReservationStepsStates();

  let footer = <></>;

  // useEffect(() => {
  //   dispatch(selectDate(selected));
  // }, [dispatch, selected]);

  const currentDate = new Date();
  if (selected && currentDate > selected) {
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
          Has seleccionado este día: <br /> {format(selected, 'PP')}.
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
          selected={selected}
          onSelect={setSelected}
          footer={footer}
          locale={es}
        />
        <Button
          className="mt-2 p-4 h-10 bg-success-200 font-semibold"
          size="md"
          // isDisabled={validateDate}
          onPress={() => dispatch(selectTab('step2'))}
        >
          Siguiente paso
        </Button>
      </CardBody>
    </Card>
  );
};
