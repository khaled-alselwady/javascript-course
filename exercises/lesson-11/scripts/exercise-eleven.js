function doesExist(array, item) {
  if (!array) {
    return false;
  }

  for (let i = 0; i < array.length; i++) {
    if (array[i] === item) {
      return true;
    }
  }

  return false;
}

function unique(array) {
  if (!array) {
    return [];
  }

  const result = [];

  array.forEach(element => {
    if (!doesExist(result, element)) {
      result.push(element);
    }
  });

  return result;
}

const array = ['green', 'red', 'blue', 'red'];
console.log(array);
console.log(unique(array));