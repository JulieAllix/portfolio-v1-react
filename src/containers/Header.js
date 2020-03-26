import { connect } from 'react-redux';

import Header from 'src/components/Header';
import { changeOpeningStatus } from 'src/actions/header';

// == Data / state
const mapStateToProps = (state) => ({
  projectIsOpen: state.header.projectIsOpen,
});

// == Actions / dispatch
const mapDispatchToProps = (dispatch) => ({
  changeOpeningStatus: () => {
    dispatch(changeOpeningStatus());
  },
});

// connect(redux)(react)
const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header);

export default HeaderContainer;
