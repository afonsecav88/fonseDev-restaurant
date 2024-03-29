export interface PersonCount {
  key: string;
  count: number;
}

export interface Schedule {
  key: string;
  typeFood: TypeFood;
}

export interface Hours {
  key: string;
  hour: string;
}

enum TypeFood {
  Breakfast,
  Lunch,
  Dinner,
}
