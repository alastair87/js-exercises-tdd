const formatCities = (capitals, transform) => {
  const transformed = [];
  capitals.forEach(capital => transformed.push(transform(capital)));
  return transformed;
};

module.exports = formatCities;
