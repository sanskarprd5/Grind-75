var search = function (nums, target) {
  let l = 0;
  let h = nums.length - 1;
  let mid;

  while (h >= 1) {
    mid = l + Math.floor((h - 1) / 2);

    if (nums[mid] == target) {
      return mid;
    }

    if (nums[mid] > target) {
      h = mid - 1;
    } else nums[mid] < target;
    l = mid + 1;
  }
  return -1;
};
