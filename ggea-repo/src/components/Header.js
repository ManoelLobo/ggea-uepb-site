import React from 'react';
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

export default Header;