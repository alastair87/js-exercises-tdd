const sales = cars => {
  let totals = {};
  cars.forEach(car => {
    if (Object.keys(totals).includes(car.make)) totals[car.make] += car.price;
    else totals[car.make] = car.price;
  });
  return totals;
};

module.exports = sales;
