// Actions
export const CHANGE_OPENING_STATUS = 'CHANGE_OPENING_STATUS';

// Actions Creators
export const changeOpeningStatus = (bool) => ({
  type: CHANGE_OPENING_STATUS,
  bool,
});
