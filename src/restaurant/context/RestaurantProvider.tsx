import { ContextRestaurant } from './RestaurantContext';

interface RestaurantProviderProps {
  children: JSX.Element | JSX.Element[];
}

export const RestaurantProvider = ({ children }: RestaurantProviderProps) => {
  return (
    <>
      <ContextRestaurant.Provider value={''}>
        {children}
      </ContextRestaurant.Provider>
    </>
  );
};
