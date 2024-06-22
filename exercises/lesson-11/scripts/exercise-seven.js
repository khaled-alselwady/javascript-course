function getMin(nums) {
  if (!nums || nums.length < 1) {
    return null;
  }

  let min = nums[0];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < min) {
      min = nums[i];
    }
  }

  return min;
}

function getMax(nums) {
  if (!nums || nums.length < 1) {
    return null;
  }

  let max = nums[0];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > max) {
      max = nums[i];
    }
  }

  return max;
}

function minMax(nums) {
  const minMaxResult = {
    min: null,
    max: null
  };

  minMaxResult.min = getMin(nums);
  minMaxResult.max = getMax(nums);

  return minMaxResult;
}

const nums = [1, 3, -5, 2];
console.log(minMax(nums));
