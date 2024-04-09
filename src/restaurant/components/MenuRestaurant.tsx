import {
  Card,
  CardHeader,
  Divider,
  CardBody,
  CardFooter,
  Avatar,
} from '@nextui-org/react';
import { menuRestaurant } from '../mocks/menuRestaurant';
import { Comida, MenuResturant } from '../models/menuRestaurant';

export const MenuRestaurant = () => {
  return (
    <div className="flex gap-3  sm:w-full md:w-full lg:w-full flex-wrap p-5 justify-center">
      {menuRestaurant.map((item: MenuResturant) => {
        return (
          <Card key={item.dia} className="flex items-center w-80 py-3 ">
            <CardHeader className="flex gap-3">
              <Avatar radius="sm" src="./day-week.svg" />
              <p className="flex align-middle">{item.dia}</p>
            </CardHeader>
            <Divider />
            {item.comidas.map((itemFood: Comida) => {
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
                  <Divider className="my-4" />
                  <div className="flex justify-end">
                    <p className="text-small text-default-500 font-semibold mr-2">
                      Precio:
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
  );
};
