import { Button, Image } from '@nextui-org/react';
import { useNavigate } from 'react-router-dom';

export const NoFoundPage = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center">
      <p className="text-md"> Página no encontrada !!!</p>
      <Image
        alt="Page not found"
        className="object-cover"
        height={200}
        src="not-found.svg"
        width={200}
      />
      <Button
        className="text-sm text-slate-50 font-bold bg-warning-400"
        variant="flat"
        color="default"
        radius="lg"
        size="md"
        startContent={
          <img className="w-4" src="./arrow-next-left.svg" alt="icon-back" />
        }
        onClick={() => navigate('/')}
      >
        Regresar
      </Button>
    </div>
  );
};
