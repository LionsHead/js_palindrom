/* global define, it, describe */

import assert from 'assert';
import isPalindrome from './solution';

describe('isPalindrome', () => {
  it('is palindrome', () => {
    assert.equal(isPalindrome('absba'), true);
    assert.equal(isPalindrome('radar'), true);
    assert.equal(isPalindrome('a'), true);
    assert.equal(isPalindrome('404'), true);
  });

  it('is not a palindrome', () => {
    assert.equal(isPalindrome('palindrome'), false);
    assert.equal(isPalindrome('aashgkhdj'), false);
    assert.equal(isPalindrome(''), false);
  });
});
