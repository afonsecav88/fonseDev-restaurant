import { Controller, SubmitHandler, useForm } from 'react-hook-form';

import { Button, Input, Textarea } from '@nextui-org/react';
import { useContactFormValidator } from '../hooks/useContactFormValidator';
import { ContactData } from '../models/contactData';
import { useReservationContext } from '../hooks/useReservationContext';
import {
  getReservationDetails,
  selectTab,
} from '../reducer/ReservationActions';
import { useState } from 'react';

export const ReservationDetails = () => {
  const { yupResolver, schemaValidator } = useContactFormValidator();
  const { initialState, dispatch } = useReservationContext();
  const {
    reservationDetails,
    // selectedTurn,
    // selectedSchedule,
    // selectedCountPerson,
  } = initialState;
  const { name, email, phone, message } = reservationDetails;
  const [, setDetails] = useState(reservationDetails);

  // const { isValidateReservationDetails } = useValidateReservationShedule(
  //   selectedTurn,
  //   selectedSchedule,
  //   selectedCountPerson
  // );

  const {
    control,
    handleSubmit,
    // reset,
    formState: { isValid, errors },
  } = useForm({
    defaultValues: { name, email, phone, message },
    resolver: yupResolver(schemaValidator),
    mode: 'onTouched',
  });

  const onSubmit: SubmitHandler<ContactData> = (data) => {
    // console.log('data :', data);
    setDetails(data);
    dispatch(getReservationDetails(data));
    dispatch(selectTab('step3'));
  };
  console.log('reservationDetails', reservationDetails);

  return (
    <div className="flex flex-col sm:flex-row sm:justify-center pl-10">
      <form
        method="post"
        onSubmit={handleSubmit(onSubmit)}
        className=" flex flex-col gap-5 pr-10 text-default-500 text-small mb-8 w-80"
      >
        <p className="text-sm">
          Los datos serán usados para enviarle los detalles de la reservación !
        </p>

        <Controller
          name="name"
          control={control}
          render={({ field: { onBlur, onChange, value } }) => (
            <Input
              value={value}
              placeholder="nombre y apellidos *"
              onChange={onChange}
              onBlur={onBlur}
              autoComplete="true"
            />
          )}
        />
        {errors.name && (
          <p className="text-red-500" role="alert">
            {errors.name.message}
          </p>
        )}

        <Controller
          name="email"
          control={control}
          render={({ field: { onBlur, onChange, value } }) => (
            <Input
              value={value}
              placeholder="email@gmail.com *"
              onChange={onChange}
              onBlur={onBlur}
              autoComplete="true"
            />
          )}
        />
        {errors.email && (
          <p className="text-red-500" role="alert">
            {errors.email.message}
          </p>
        )}

        <Controller
          name="phone"
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              type="text"
              value={value}
              placeholder="099998877   *"
              onChange={onChange}
              onBlur={onBlur}
              autoComplete="true"
            />
          )}
        />
        {errors.phone && (
          <p className="text-red-500" role="alert">
            {errors.phone?.message}
          </p>
        )}

        <Controller
          name="message"
          control={control}
          render={({ field: { onBlur, onChange, value } }) => (
            <Textarea
              value={value}
              onChange={onChange}
              onBlur={onBlur}
              label="Observaciones de su reserva *"
              id="message"
              autoComplete="true"
              name="message"
            />
          )}
        />
        {errors.message && (
          <p className="text-red-500" role="alert">
            {errors.message?.message}
          </p>
        )}

        <Button
          color="success"
          variant="solid"
          // isDisabled={isValid && !isValidateReservationDetails}
          id="send-message"
          type="submit"
          endContent={
            <img className="w-4" src="./arrow-next-right.svg" alt="icon-next" />
          }
          className="text-white font-semibold "
          // onPress={() => dispatch(selectTab('step3'))}
        >
          Siguiente paso
        </Button>
        <Button
          color="warning"
          variant="solid"
          id="send-message"
          type="submit"
          startContent={
            <img className="w-4" src="./arrow-next-left.svg" alt="icon-back" />
          }
          className="text-white font-semibold "
          onPress={() => dispatch(selectTab('step1'))}
        >
          Paso Anterior
        </Button>
      </form>
    </div>
  );
};
