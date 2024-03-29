import { Select, SelectItem } from '@nextui-org/react';
import { Card } from '@nextui-org/card';
import { CardBody } from '@nextui-org/react';
import { useState } from 'react';
import { personCountData } from '../shared/mocks/personCountData';

export const ReservationSchedule = () => {
  //   const [] = useState([{}]);
  //   const [] = useState([{}]);

  const [personData] = useState(personCountData);
  const [count, setCount] = useState<string>('');

  return (
    <Card>
      <CardBody>
        <Select
          label="Seleccione la cantidad de personas"
          placeholder="Seleccione cantidad"
          className="max-w-xs"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        >
          {personData.map((person) => (
            <SelectItem
              textValue={person.key}
              key={person.key}
              value={person.count}
            >
              {person.count}
            </SelectItem>
          ))}
        </Select>
        <p>Haz seleccionado reservación para </p>
        {count}
      </CardBody>
    </Card>
  );
};
