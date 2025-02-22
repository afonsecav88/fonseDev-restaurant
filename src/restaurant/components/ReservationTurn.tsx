import { Card, CardBody, Select, SelectItem } from '@nextui-org/react';
import { turnFoodsData, turnFoodsDataW } from '../mocks/turnsFoodsData';
import { useReservationContext, useGetDayOfWeek } from '../hooks/';
import { selectTurn } from '../reducer/ReservationActions';
import { useState } from 'react';

export const ReservationTurn = () => {
  const { initialState, dispatch } = useReservationContext();
  const { selectedTurn, selectedDate } = initialState;
  const dayOfWeek = useGetDayOfWeek(selectedDate);
  const [turn, setTurn] = useState<string | number>(selectedTurn);

  const handleSelectionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTurn(e.target.value);
    dispatch(selectTurn(e.target.value));
  };

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
            selectedKeys={[turn]}
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
          <div className="inline-flex">
            <p className="text-small text-default-500 font-bold my-3 mr-2">
              Horario de:
            </p>
            <p className="text-small text-default-500 font-semibold my-3">
              {turn.toString()}
            </p>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};
