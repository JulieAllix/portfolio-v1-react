import { expect } from 'chai';

import headerReducer from 'src/reducers/header';

import { changeOpeningStatus } from 'src/actions/header';

describe('Tests on the header reducer', () => {
  describe('#structure', () => {
    it('expected to be a function', () => {
      expect(headerReducer).to.exist;
      expect(headerReducer).to.be.a('function');
    });
    it('expected to return an object which has menuIsOpen property', () => {
      expect(headerReducer()).to.be.an('object').which.has.property('menuIsOpen', false);
    });
    describe('with actions', () => {
      it('check case of action CHANGE_OPENING_STATUS', () => {
        const stateBefore = {
          menuIsOpen: false,
        };
        const action = changeOpeningStatus(true);
        expect(headerReducer(stateBefore, action)).to.eql({
          menuIsOpen: true, // menuIsOpen has been set to true
        });
      });
    });
  });
});
