module.exports = formatCities;

function formatCities(capitals, transform) {
  return capitals.map(transform);
}
