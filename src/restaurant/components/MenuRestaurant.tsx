import {
  Card,
  CardHeader,
  Divider,
  CardBody,
  CardFooter,
  Image,
} from '@nextui-org/react';
import { menuRestaurant } from '../mocks/menuRestaurant';

export const MenuRestaurant = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col items-center font-semibold text-blue-400">
        Nuestra carta para esta semana
      </div>
      <div className="flex gap-3 sm:w-full md:w-full lg:w-full flex-wrap p-5 justify-center">
        {menuRestaurant.map((item) => {
          return (
            <Card key={item.dia} className="flex items-center w-80 py-3 ">
              <CardHeader className="flex gap-3">
                {/* <Image src={item.imagen} className="w-28 h-28" /> */}

                <p className="flex align-middle font-bold">{item.dia}</p>
              </CardHeader>

              <Image
                alt="image-food"
                src={item.imagen}
                width={270}
                height={150}
                title="menu"
                className="w-full pb-2 hover:-translate-y-1 hover:scale-110 hover:transition hoverduration-300 hover:ease-in-out cursor-pointer"
              />
              <Divider />
              {item.comidas.map((itemFood) => {
                return (
                  <CardBody key={itemFood.id}>
                    <div className="inline-flex my-2">
                      <p className="text-small text-default-500 font-semibold mr-2">
                        Tipo:
                      </p>
                      <p className="text-small text-default-500 ">
                        {itemFood.tipo}
                      </p>
                    </div>
                    <div className="inline-flex py-1">
                      <p className="text-small text-default-500 font-semibold mr-2">
                        Plato:
                      </p>
                      <p className="text-small text-default-500 ">
                        {itemFood.plato}
                      </p>
                    </div>

                    <div className="inline-flex center py-1">
                      <p className="text-small text-default-500 font-semibold mr-2">
                        Descripción:
                      </p>
                      <p className="text-small text-default-500 text-pretty">
                        {itemFood.descripcion}
                      </p>
                    </div>
                    <Divider />
                    <div className="flex justify-end">
                      <p className="text-small text-default-500 font-semibold mr-2">
                        Precio: 💲
                      </p>
                      <p className=" text-small text-default-500">
                        {' '}
                        {itemFood.precio}
                      </p>
                    </div>
                  </CardBody>
                );
              })}
              <CardFooter className="flex flex-col gap-2"></CardFooter>
            </Card>
          );
        })}
      </div>
    </div>
  );
};
