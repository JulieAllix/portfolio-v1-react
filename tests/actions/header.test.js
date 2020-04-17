import { expect } from 'chai';
import { changeOpeningStatus } from 'src/actions/header';

describe('Tests on the header actions', () => {
  it('should create an action to change opening status', () => {
    const bool = false;
    const expectedAction = {
      type: 'CHANGE_OPENING_STATUS',
      bool,
    };
    expect(changeOpeningStatus(bool)).to.eql(expectedAction);
  });
});
