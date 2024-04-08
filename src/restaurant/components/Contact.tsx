import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { Button, Input, Textarea } from '@nextui-org/react';
import { ContactData } from '../models/contactData';
import { ContactDetails } from './ContactDetails';
import { DevTool } from '@hookform/devtools';

import { useContactFormValidator, UseSendEmailContact } from '../hooks/';
import { ReservationPdfDownload } from './ReservationPdfDownload';
import { ReservationPdfViewer } from './ReservationPdfViewer';

export const Contact = () => {
  const { yupResolver, schemaValidator } = useContactFormValidator();
  const {
    control,
    handleSubmit,
    reset,
    formState: { isValid, errors },
  } = useForm({
    defaultValues: { name: '', email: '', phone: '', message: '' },
    resolver: yupResolver(schemaValidator),
    mode: 'onTouched',
  });

  const onSubmit: SubmitHandler<ContactData> = (data) => {
    UseSendEmailContact(data);
    reset();
  };

  return (
    <div className="flex flex-col sm:flex-row sm:justify-center pl-10">
      <form
        method="post"
        onSubmit={handleSubmit(onSubmit)}
        className=" flex flex-col gap-5 pr-10 text-default-500 text-small mb-8 w-80"
      >
        <p className="text-xl">Tu opinión es importante !</p>

        <Controller
          name="name"
          control={control}
          render={({ field: { onBlur, onChange, value } }) => (
            <Input
              value={value}
              placeholder="nombre *"
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
              label="Mensaje *"
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
          isDisabled={!isValid}
          id="send-message"
          type="submit"
          className="text-white font-semibold "
        >
          Enviar comentario
        </Button>
      </form>
      <ContactDetails />
      <ReservationPdfDownload />
      <ReservationPdfViewer />
      <DevTool control={control} /> {/* set up the dev tool */}
    </div>
  );
};
