import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
} from '@nextui-org/react';
import { ContactData } from '../shared/models/contactData';
import { format } from 'date-fns';

interface ReservationSummaryProps {
  selectedTurn: number | string;
  selectedSchedule: number | string;
  selectedCountPerson: number | string;
  selectedDate: Date | undefined;
  reservationDetails: ContactData;
}
export const ReservationSummary = ({
  selectedTurn,
  selectedSchedule,
  selectedCountPerson,
  selectedDate,
  reservationDetails,
}: ReservationSummaryProps) => {
  console.log('selectedDate:');

  const { name, email, phone, message } = reservationDetails;

  return (
    <>
      <Card className="flex items-center w-80 py-3 ">
        <p className="">Resumen de su reserva</p>
        <CardHeader className="flex gap-3">
          <div className="flex flex-col">
            <p className="text-md underline">Fecha:</p>
            <p className="text-small text-default-500">
              {format(selectedDate, 'PP')}
            </p>
          </div>
        </CardHeader>
        <Divider />
        <CardBody className="">
          <p className="text-md underline">Detalles:</p>
          <div className="inline-flex">
            <p className="text-small text-default-500 font-semibold mr-2">
              Turno:
            </p>
            <p className="text-small text-default-500 "> {selectedTurn}</p>
          </div>
          <div className="inline-flex">
            <p className="text-small text-default-500 font-semibold mr-2">
              Hora:
            </p>
            <p className="text-small text-default-500"> {selectedSchedule}</p>
          </div>
          <div className="inline-flex">
            <p className="text-small text-default-500 font-semibold mr-2">
              Cantidad de personas:
            </p>
            <p className="text-small text-default-500">
              {' '}
              {selectedCountPerson}
            </p>
          </div>
          <Divider />

          <p className="text-md underline">Sus datos:</p>
          <div className="inline-flex">
            <p className="text-small text-default-500 font-semibold mr-2">
              Nombre:
            </p>
            <p className="text-small text-default-500 "> {name}</p>
          </div>
          <div className="inline-flex">
            <p className="text-small text-default-500 font-semibold mr-2">
              Email:
            </p>
            <p className="text-small text-default-500"> {email}</p>
          </div>
          <div className="inline-flex">
            <p className="text-small text-default-500 font-semibold mr-2">
              Teléfono:
            </p>
            <p className="text-small text-default-500">{phone}</p>
          </div>
          <div className="inline-flex">
            <p className="text-small text-default-500 font-semibold mr-2">
              Observaciones:
            </p>
            <p className="text-small text-default-500">{message}</p>
          </div>
        </CardBody>
        <Divider />
        <CardFooter className="flex flex-col gap-2">
          <p>
            Al confirmar su reserva, recibirá un mail con los detalles de la
            misma.{' '}
          </p>

          <Button
            className="flex  mt-2 p-4 h-10 bg-success-200 text-slate-600 font-semibold "
            size="md"
            // onPress={() => setSelectedTab('step3')}
          >
            Confirmar Reserva
          </Button>
        </CardFooter>
      </Card>
    </>
  );
};
