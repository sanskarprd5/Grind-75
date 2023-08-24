function isPalindrome(s) {
  // Remove non-alphanumeric characters and convert to lowercase
  let cleanString = s.toLowerCase().replace(/[^a-z0-9]/g, "");

  // Create a reversed string
  let reversedString = cleanString.split("").reverse().join("");

  // Compare the cleaned string with the reversed string
  return cleanString === reversedString;
}

const res = isPalindrome("A man, a plan, a canal: Panama");
console.log(res); // Output: true
