// BEGIN (write your solution here)
import * as strings from './strings';

const isPalindrome = (string) => {
  if (strings.length(string) < 1) {
    return false;
  } else if (strings.length(string) === 1) {
    return true;
  }
  if (string.charAt(0) !== string.charAt(strings.length(string) - 1)) {
    return false;
  }

  return isPalindrome(string.substr(1, strings.length(string) - 2));
};

export default isPalindrome;
// END
