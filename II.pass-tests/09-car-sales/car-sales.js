module.exports = totalCarSales;

function totalCarSales(carsSold) {
  var totals = {};
  carsSold.forEach(
    car =>
      car.make in totals
        ? (totals[car.make] += car.price)
        : (totals[car.make] = car.price)
  );
  return totals;
}
