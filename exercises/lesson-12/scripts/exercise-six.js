function countPositive(nums) {
  if (!nums) {
    return null;
  }

  let positiveNumbers = 0;

  nums.forEach((num) => {
    if (num > 0) {
      positiveNumbers++;
    }
  });

  return positiveNumbers;
}

console.log(countPositive([-1, 3, -5]));