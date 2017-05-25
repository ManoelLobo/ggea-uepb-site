import React from 'react';
import PropTypes from 'prop-types';

import AppBar from 'material-ui/AppBar';

class Header extends React.Component {
  render() {
    return (
      <AppBar
        title="GGEA Repo"
        onLeftIconButtonTouchTap={this.props.toggleMenu}
      />
    );
  }
}

Header.propTypes = {
  toggleMenu: PropTypes.func.isRequired
}

export default Header;