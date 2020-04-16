import { expect } from 'chai';

import headerReducer from 'src/reducers/header';

describe('Tests on the header reducer', () => {
  describe('#structure', () => {
    it('expected to be a function', () => {
      expect(headerReducer).to.be.a('function');
    });
  });
});
/*
var assert = require('assert');

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});
*/
