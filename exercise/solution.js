// BEGIN (write your solution here)
const isPalindrome = (string) => {
  // return string === string.split('').reverse().join('');

  if (string.length <= 1) {
    return true;
  }
  if (string.charAt(0) !== string.charAt(string.length - 1)) {
    return false;
  }

  return isPalindrome(string.substr(1, string.length - 2));
};

export default isPalindrome;
// END
