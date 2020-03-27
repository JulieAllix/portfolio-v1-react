import { connect } from 'react-redux';

import Header from 'src/components/Header';
import { changeOpeningStatus } from 'src/actions/header';

// == Data / state
const mapStateToProps = (state) => ({
  menuIsOpen: state.header.menuIsOpen,
});

// == Actions / dispatch
const mapDispatchToProps = (dispatch) => ({
  changeOpeningStatus: (bool) => {
    dispatch(changeOpeningStatus(bool));
  },
});

// connect(redux)(react)
const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header);

export default HeaderContainer;
