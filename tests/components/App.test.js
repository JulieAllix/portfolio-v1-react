import { expect } from 'chai';

import headerReducer from 'src/reducers/header';

describe('tests sur le reducer de recettes', () => {
  describe('#structure', () => {
    it('expected to be a function', () => {
      expect(headerReducer).to.be.a('function');
    });

    it('expected to return an object which has loading property', () => {
      expect(headerReducer()).to.be.an('object')
        .which.has.a.property('loading', true);
    });

    it('expected to return an object which has list property', () => {
      expect(headerReducer()).to.be.an('object')
        .which.has.a.property('list').which.is.an('array').which.is.empty;
    });

    it('expected to return an object which has key property', () => {
      expect(headerReducer()).to.be.an('object')
        .which.has.a.property('key').which.is.a('bool');
    });
  });
});
