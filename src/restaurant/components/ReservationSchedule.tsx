import { Card, CardBody, Select, SelectItem } from '@nextui-org/react';
import { turnFoods } from '../shared/mocks/turnsFoodsData';

interface ReservationCountPersonProps {
  selectedSchedule: string | number;
  setSelectedSchedule: React.Dispatch<React.SetStateAction<string | number>>;
}

export const ReservationSchedule = ({
  selectedSchedule,
  setSelectedSchedule,
}: ReservationCountPersonProps) => {
  const handleSelectionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedSchedule(e.target.value);
  };

  return (
    <Card className="w-72 my-3">
      <CardBody>
        <div className="flex w-full max-w-xs flex-col gap-2">
          <p className="py-3 font-semibold text-sm text-green-400">
            Seleccione Hora:
          </p>
          <Select
            label="Turnos :"
            variant="bordered"
            placeholder="Seleccione"
            selectedKeys={[selectedSchedule]}
            className="max-w-xs"
            onChange={handleSelectionChange}
          >
            {turnFoods.map((turn) => (
              <SelectItem
                key={turn.typeFood}
                textValue={turn.typeFood.toString()}
                value={turn.typeFood}
              >
                {turn.typeFood}
              </SelectItem>
            ))}
          </Select>
          <p className="text-small text-default-500 font-semibold my-3">
            Reserva para: {selectedSchedule.toString()}
          </p>
        </div>
      </CardBody>
    </Card>
  );
};
