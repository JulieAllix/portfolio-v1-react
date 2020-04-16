import { expect } from 'chai';

import headerReducer from 'src/reducers/header';

describe('Tests on the header reducer', () => {
  describe('#structure', () => {
    it('expected to be a function', () => {
      expect(headerReducer).to.be.a('function');
    });
    it('expected to return an object which has menuIsOpen property', () => {
      expect(headerReducer()).to.be.an('object').which.has.property('menuIsOpen', false);
    });
  });
});
