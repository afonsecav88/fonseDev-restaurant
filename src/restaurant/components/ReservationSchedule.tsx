import { Card, CardBody, Select, SelectItem } from '@nextui-org/react';
import { useState } from 'react';
import { personCountData } from '../shared/mocks/personCountData';

export const ReservationSchedule = () => {
  const [personData] = useState(personCountData);
  const [count, setCount] = useState<string | number>(0);

  return (
    <Card className="w-64">
      <CardBody>
        <Select
          isRequired
          label="Favorite Animal"
          placeholder="Select an animal"
          defaultSelectedKeys={personCountData[0].key}
          className="max-w-xs"
          value={count}
        >
          {personData.map((person) => (
            <SelectItem
              key={person.key}
              value={person.count}
              onChange={() => setCount(person.count)}
            >
              {person.count}
            </SelectItem>
          ))}
        </Select>
      </CardBody>
    </Card>
  );
};
