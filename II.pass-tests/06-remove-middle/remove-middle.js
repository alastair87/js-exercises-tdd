module.exports = removeMiddle;

function removeMiddle(array) {
  return array.splice(array.length / 2, 1);
}
