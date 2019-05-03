const removeMiddle = words => {
  return words.splice((words.length - 1) / 2, 1);
};

module.exports = removeMiddle;
