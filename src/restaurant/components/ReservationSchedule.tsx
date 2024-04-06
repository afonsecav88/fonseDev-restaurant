import { Card, CardBody, Select, SelectItem } from '@nextui-org/react';
import { scheduleData, scheduleDataW } from '../mocks/scheduleData';
import { useReservationContext } from '../hooks/useReservationContext';
import { selectSchedule } from '../reducer/ReservationActions';

// interface ReservationCountPersonProps {
//   selectedSchedule: string | number;
//   setSelectedSchedule: React.Dispatch<React.SetStateAction<string | number>>;
//   dayOfWeek?: number;
// }

export const ReservationSchedule = () => {
  const { initialState, dispatch } = useReservationContext();
  const { selectedSchedule } = initialState;

  const handleSelectionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(selectSchedule(e.target.value));
  };
  const dayOfWeek = 0;

  const getScheduleAccordingDay = () => {
    return dayOfWeek == 0 || dayOfWeek == 1 ? scheduleDataW : scheduleData;
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
            selectedKeys={[selectedSchedule]}
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
