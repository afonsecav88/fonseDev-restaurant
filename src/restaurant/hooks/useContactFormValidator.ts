import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

export const useContactFormValidator = () => {
  const emailPattern =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const phonePattern =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  const schemaValidator = yup.object({
    name: yup
      .string()
      .min(3, 'Al menos 3 caracteres.')
      .max(40, 'Al menos 40 caracteres.')
      .required('Este campo es requerido.'),
    email: yup
      .string()
      .email('Email no válido.')
      .required('Este campo es requerido.')
      .matches(emailPattern, 'Ej: email@gmail.com'),
    phone: yup
      .string()
      .required('Este campo es requerido.')
      .matches(phonePattern, 'Número no válido:  Ej: 099 887755'),
    message: yup
      .string()
      .min(6, 'Al menos 6 caracters')
      .max(80, 'Al menos 80 caracteres.')
      .required('Este campo es requerido'),
  });
  return {
    schemaValidator,
    yupResolver,
  };
};
