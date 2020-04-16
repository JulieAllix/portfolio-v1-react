import { expect } from 'chai';

import headerReducer from 'src/reducers/header';

describe('Tests on the header reducer', () => {
  describe('#structure', () => {
    it('expected to be a function', () => {
      expect(headerReducer).to.be.a('function');
    });
  });
});
