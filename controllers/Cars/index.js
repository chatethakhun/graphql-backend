const cars = [
  {
    id: 1,
    name: "Honda"
  },
  {
    id: 2,
    name: "Toyota"
  },
  {
    id: 3,
    name: "Nissan"
  }
];

export const getAllCars = () => {
  return cars;
};

export const addCar = (args, { name }) => {
  let lastedId = 0;
  const newCars = cars;
  cars.map(({ id }) => {
    lastedId = id;
  });
  newCars.push({ id: lastedId + 1, name });
  return newCars;
};

export const removeCar = (args, { id }) => {
  const filterCar = cars.filter(car => car.id !== id);
  return filterCar;
};
