import { Schedule, Turns, TypeFood } from '../models/reservationData';

export const turnFoods: Turns[] = [
  {
    id: 'asds444',
    typeFood: TypeFood.Breakfast,
    schedule: Schedule.Breakfast,
  },
  {
    id: 'asdsfdsf4',
    typeFood: TypeFood.Lunch,
    schedule: Schedule.Lunch,
  },
  {
    id: 'dsfddf33',
    typeFood: TypeFood.Dinner,
    schedule: Schedule.Dinner,
  },
];

export const turnFoodsW: Turns[] = [
  {
    id: 'asds4dsf44',
    typeFood: TypeFood.Breakfast,
    schedule: Schedule.BreakfastW,
  },
  {
    id: 'asds444',
    typeFood: TypeFood.Dinner,
    schedule: Schedule.DinnerW,
  },
];
