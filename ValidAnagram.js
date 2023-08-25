function ValidAnagram(str1, str2) {
  if (str1.length != str2.length) {
    return false;
  }

  s1 = str1.toLowerCase().split("").sort().join("");
  s2 = str2.toLowerCase().split("").sort().join("");

  if (s1 == s2) {
    return true;
  } else {
    return false;
  }
}

const res = ValidAnagram("anagram", "nagaram");
console.log(res);
