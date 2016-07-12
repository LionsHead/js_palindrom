/* global define, it, describe */

import assert from 'assert';
import isPalindrome from './solution';

describe('isPalindrome', () => {
  it('is palindrome', () => {
    assert.equal(true, isPalindrome('absba'));
    assert.equal(true, isPalindrome('radar'));
    assert.equal(true, isPalindrome('a'));
    assert.equal(true, isPalindrome('404'));
  });

  it('is not a palindrome', () => {
    assert.equal(false, isPalindrome('palindrome'));
    assert.equal(false, isPalindrome('aashgkhdj'));
  });
});
