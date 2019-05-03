const paintShop = (cars, colour) => {
  const carsCopy = cars.map(a => Object.assign({}, a));
  carsCopy.forEach(car => {
    if (car.make === "Ford") car.colour = colour;
  });
  return carsCopy;
};

module.exports = paintShop;
