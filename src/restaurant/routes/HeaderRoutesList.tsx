interface HeaderRoutes {
  id: number;
  path: string;
  name: string;
}

export const headerRoutesList: HeaderRoutes[] = [
  {
    id: 1,
    path: '',
    name: 'Inicio',
  },
  {
    id: 2,
    path: 'menu',
    name: 'Carta',
  },
  {
    id: 3,
    path: 'reservation',
    name: 'Reservación',
  },
  {
    id: 4,
    path: 'contact',
    name: 'Contacto',
  },
];
