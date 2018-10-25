import { getAllCars, addCar, removeCar } from "../../controllers/Cars";

export default {
  Query: {
    cars: getAllCars
  },
  Mutation: {
    addCar,
    removeCar
  }
};
