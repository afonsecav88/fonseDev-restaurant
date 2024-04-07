import { Card, CardBody, Select, SelectItem } from '@nextui-org/react';
import { scheduleData, scheduleDataW } from '../mocks/scheduleData';
import { useReservationContext } from '../hooks/useReservationContext';
import { selectSchedule } from '../reducer/ReservationActions';
import { useState } from 'react';

export const ReservationSchedule = () => {
  const dayOfWeek = 0;
  const { initialState, dispatch } = useReservationContext();
  const { selectedSchedule } = initialState;
  const [schedule, setSchedule] = useState<string | number>(selectedSchedule);

  const getScheduleAccordingDay = () => {
    return dayOfWeek == 0 || dayOfWeek == 1 ? scheduleDataW : scheduleData;
  };
  const handleSelectionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSchedule(e.target.value);
    dispatch(selectSchedule(e.target.value));
  };

  return (
    <Card className="w-72 my-3">
      <CardBody>
        <div className="flex w-full max-w-xs flex-col gap-2">
          <p className="py-3 font-semibold text-sm text-green-400">
            Seleccione Hora:
          </p>
          <Select
            label="Horarios :"
            variant="bordered"
            placeholder="Seleccione"
            selectedKeys={[schedule]}
            className="max-w-xs"
            onChange={handleSelectionChange}
          >
            {getScheduleAccordingDay().map((schedule) => (
              <SelectItem
                key={schedule.schedule}
                textValue={schedule.schedule}
                value={schedule.schedule}
              >
                {schedule.schedule}
              </SelectItem>
            ))}
          </Select>
          <p className="text-small text-default-500 font-semibold my-3">
            Horario de : {selectedSchedule.toString()}
          </p>
        </div>
      </CardBody>
    </Card>
  );
};
