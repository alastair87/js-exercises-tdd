module.exports = paintShop;

function paintShop(cars, colour) {
  var carsCopy = cars.map(car => Object.assign({}, car));
  carsCopy.forEach(car => {
    if (car.make == "Ford") {
      car.colour = colour;
    }
  });
  return carsCopy;
}
