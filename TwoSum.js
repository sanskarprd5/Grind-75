function TwoSum(nums, target) {
  // Create a Map to store the elements and their indices
  let map = new Map();
  
  // Iterate through the array using a for loop
  for (let i = 0; i < nums.length; i++) {
    // For the current element at index 'i'
    let num1 = nums[i];  // Store the current element
    let num2 = target - num1;  // Calculate the complementary value needed to reach the target
    
    // Check if the complementary value is already in the Map
    if (map.has(num2)) {
      // If found, return the indices of the current element and the complementary element
      return [map.get(num2), i];
    }
    
    // If the complementary value is not in the Map, add the current element to the Map
    // with its index as the value
    map.set(num1, i);
  }
  
  // If no solution is found, return null or an appropriate value
}
