import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
} from '@nextui-org/react';
import { format } from 'date-fns';
import { useReservationContext } from '../hooks/useReservationContext';
import { selectTab } from '../reducer/ReservationActions';

import { Steps } from '../models/reservationData';
import { useHandleSubmitReservation } from '../hooks/useHandleSubmitReservation';

export const ReservationSummary = () => {
  const { initialState, dispatch } = useReservationContext();
  const { HandleSubmitReservation } = useHandleSubmitReservation();
  const {
    reservationDetails,
    selectedDate,
    selectedSchedule,
    selectedTurn,
    selectedCountPerson,
  } = initialState;
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
          <div className="inline-flex gap-3">
            <Button
              color="warning"
              variant="solid"
              id="send-message"
              type="submit"
              startContent={
                <img
                  className="w-4"
                  src="./arrow-next-left.svg"
                  alt="icon-back"
                />
              }
              className="text-white font-semibold "
              onPress={() => dispatch(selectTab(Steps.Step2))}
            >
              Paso Anterior
            </Button>
            <Button
              className="flex  bg-success-200 text-slate-600 font-semibold "
              size="md"
              type="submit"
              startContent={
                <img
                  className="w-5"
                  src="./check-reservation.svg"
                  alt="icon-back"
                />
              }
              onClick={HandleSubmitReservation}
            >
              Confirmar Reserva
            </Button>
          </div>
        </CardFooter>
      </Card>
    </>
  );
};
