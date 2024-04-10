import { EmailJSResponseStatus } from '@emailjs/browser';
import { toast } from 'sonner';

export const useNotification = () => {
  const notificationContactPromise = (
    sendMailcontactPromise: Promise<EmailJSResponseStatus>
  ) =>
    toast.promise(sendMailcontactPromise, {
      loading: 'Enviando su mensaje...',
      success: () => {
        return `Su mensaje ha sido enviado correctamente !`;
      },
      error: (error) => {
        console.log(error);
        return `Ha ocurrio un error: No se envió su mensaje`;
      },
    });

  const notificationReservationPromise = (
    sendMailcontactPromise: Promise<EmailJSResponseStatus>
  ) =>
    toast.promise(sendMailcontactPromise, {
      loading: 'Realizando su reserva...',
      success: () => {
        return `Se ha realizado su reserva, revise su mail !`;
      },
      error: (error) => {
        console.log(error);
        return `Ha ocurrio un error: No se envió su reserva`;
      },
    });

  return {
    notificationContactPromise,
    notificationReservationPromise,
  };
};
