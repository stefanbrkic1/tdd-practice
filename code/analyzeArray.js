function analyzeArray(array) {
  return {
    average: getAverage(array),
    min: getMin(array),
    max: getMax(array),
    length: array.length,
  };
}

function getAverage(arr) {
  const sum = arr.reduce((sum, acc) => {
    return (sum += acc);
  }, 0);
  return sum / arr.length;
}

function getMin(arr) {
  return arr.reduce((min, next) => {
    if (min < next) {
      return min;
    }
    return next;
  });
}

function getMax(arr) {
  return arr.reduce((max, next) => {
    if (max > next) {
      return max;
    }
    return next;
  });
}

module.exports = analyzeArray;
