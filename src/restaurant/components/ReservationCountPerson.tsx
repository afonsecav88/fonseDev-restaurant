import { Card, CardBody, Select, SelectItem } from '@nextui-org/react';
import { personCountData } from '../mocks/personCountData';

interface ReservationCountPersonProps {
  selectedCountPerson: string | number;
  setSelectedCountPerson: React.Dispatch<React.SetStateAction<string | number>>;
}

export const ReservationCountPerson = ({
  selectedCountPerson: value,
  setSelectedCountPerson: setValue,
}: ReservationCountPersonProps) => {
  const handleSelectionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setValue(e.target.value);
  };

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
            selectedKeys={[value]}
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
            Reserva para: {value.toString()}
          </p>
        </div>
      </CardBody>
    </Card>
  );
};
