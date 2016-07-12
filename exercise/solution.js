// BEGIN (write your solution here)
const isPalindrome = (string) => {
  if (string.length < 1) {
    return false;
  } else if (string.length === 1) {
    return true;
  }
  if (string.charAt(0) !== string.charAt(string.length - 1)) {
    return false;
  }

  return isPalindrome(string.substr(1, string.length - 2));
};

export default isPalindrome;
// END
