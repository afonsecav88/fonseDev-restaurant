import { Card, CardBody, Select, SelectItem } from '@nextui-org/react';
import { turnFoods } from '../shared/mocks/turnsFoods';

interface ReservationCountPersonProps {
  type: string | number;
  setType: React.Dispatch<React.SetStateAction<string | number>>;
}

export const ReservationTurns = ({
  type,
  setType,
}: ReservationCountPersonProps) => {
  const handleSelectionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setType(e.target.value);
  };

  return (
    <Card className="w-72">
      <CardBody>
        <div className="flex w-full max-w-xs flex-col gap-2">
          <p className="py-3 font-semibold text-sm text-green-400">
            Seleccione turno:
          </p>
          <Select
            label="Turnos :"
            variant="bordered"
            placeholder="Seleccione"
            selectedKeys={[type]}
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
            Reserva para: {type.toString()}
          </p>
        </div>
      </CardBody>
    </Card>
  );
};
