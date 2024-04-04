import { Card, CardBody, Select, SelectItem } from '@nextui-org/react';
import { turnFoodsData, turnFoodsDataW } from '../shared/mocks/turnsFoodsData';

interface ReservationCountPersonProps {
  selectedTurn: string | number;
  setSelectedTurn: React.Dispatch<React.SetStateAction<string | number>>;
  dayOfWeek?: number;
}

export const ReservationTurn = ({
  selectedTurn,
  setSelectedTurn,
}: ReservationCountPersonProps) => {
  const handleSelectionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedTurn(e.target.value);
  };
  const dayOfWeek = 0;

  const getTurnAccordingDay = () => {
    return dayOfWeek == 0 || dayOfWeek == 1 ? turnFoodsDataW : turnFoodsData;
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
            selectedKeys={[selectedTurn]}
            className="max-w-xs"
            onChange={handleSelectionChange}
          >
            {getTurnAccordingDay().map((turn) => (
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
            Reserva para: {selectedTurn.toString()}
          </p>
        </div>
      </CardBody>
    </Card>
  );
};
