import { toast } from 'sonner';

export const useNotification = () => {
  const configSuccessReservation = {
    className: 'success-notification',
    duration: 3500,
  };

  const configSuccessContact = {
    className: 'success-notification',
    description: 'Su opinión es importante para nosotros !',
    duration: 3500,
  };
  const configErrorContact = {
    className: 'error-notification',
    description: 'No se han podido enviar su mensaje !',
    duration: 3500,
  };
  const configErrorReservation = {
    className: 'error-notification',
    description: 'No se ha podido realizar su reservación !',
    duration: 3500,
  };

  const successReservationNotification = () =>
    toast.success('Reserva creada correctamente', configSuccessReservation);

  const successContactNotification = () =>
    toast.success('Su mensaje ha sido enviado', configSuccessContact);

  const errorContactNotification = () =>
    toast.success('Ha ocurrio un error', configErrorContact);

  const errorReservationNotification = () =>
    toast.success('Ha ocurrio un error', configErrorReservation);

  const notificationPromise = (myPromise: Promise<void>) =>
    toast.promise(myPromise, {
      loading: 'Enviando su mensaje...',
      success: () => {
        return `Su mensaje ha sido enviado`;
      },
      error: 'Ha ocurrio un error',
    });

  return {
    successReservationNotification,
    errorContactNotification,
    successContactNotification,
    errorReservationNotification,
    notificationPromise,
  };
};
