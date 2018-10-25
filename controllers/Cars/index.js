let cars = [
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
  if (cars.find(car => car.id === id)) {
    cars = cars.filter(car => car.id !== id);
    return cars.filter(car => car.id !== id);
  } else {
    return Promise.reject("id not found");
  }
};
