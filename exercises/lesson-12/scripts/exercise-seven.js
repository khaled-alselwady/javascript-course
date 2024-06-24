function addNum(array, num) {
  if (!array) {
    return [];
  }

  // return array.map((item) => {
  //   return item + num;
  // });

  return array.map((item) => item + num);
}

console.log(addNum([1, 2, 3], 2));