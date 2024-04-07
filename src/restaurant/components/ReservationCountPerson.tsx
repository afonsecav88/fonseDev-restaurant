import { Card, CardBody, Select, SelectItem } from '@nextui-org/react';
import { personCountData } from '../mocks/personCountData';
import { useState } from 'react';
import { useReservationContext } from '../hooks/useReservationContext';
import { selectCountPerson } from '../reducer/ReservationActions';

export const ReservationCountPerson = () => {
  const { initialState, dispatch } = useReservationContext();
  const { selectedCountPerson } = initialState;
  const [personCount, setPersonCount] = useState(selectedCountPerson);

  const handleSelectionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPersonCount(e.target.value);
    dispatch(selectCountPerson(e.target.value));
  };

  console.log('selectedCountPerson', selectedCountPerson);

  return (
    <Card className="w-72 my-2">
      <CardBody>
        <div className="flex w-full max-w-xs flex-col gap-2">
          <p className="py-3 font-semibold text-sm text-green-400">
            Cantidad de personas:
          </p>
          <Select
            label="Seleccione cantidad :"
            variant="bordered"
            placeholder="Seleccione"
            selectedKeys={[personCount]}
            className="max-w-xs"
            onChange={handleSelectionChange}
          >
            {personCountData.map((person) => (
              <SelectItem
                key={person.value}
                textValue={person.value.toString()}
                value={person.value}
              >
                {person.value}
              </SelectItem>
            ))}
          </Select>
          <p className="text-small text-default-500 font-semibold my-3">
            Reserva para: {personCount}
          </p>
        </div>
      </CardBody>
    </Card>
  );
};
