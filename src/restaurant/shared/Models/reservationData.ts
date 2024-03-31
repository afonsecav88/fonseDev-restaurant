export interface PersonCount {
  id: string;
  value: number;
}

export interface Turns {
  id: string;
  typeFood: TypeFood;
}

export interface ScheduleHours {
  id: string;
  schedule: Schedule;
}

export enum TypeFood {
  Breakfast = 'Desayuno',
  Lunch = 'Almuerzo',
  Dinner = 'Cena',
}

export enum Schedule {
  Breakfast = '8:00 a.m. - 11:00 a.m.',
  Lunch = '12:00 p.m. - 3:00 p.m',
  Dinner = '6:00 p.m. - 11:00 p.m.',
  BreakfastW = '9:00 a.m. - 2:00 p.m.',
  DinnerW = '5:00 p.m. - 9:00 p.m.',
}
