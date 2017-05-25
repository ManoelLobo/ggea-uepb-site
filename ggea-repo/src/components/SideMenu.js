import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import IconButton from 'material-ui/IconButton';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import NavigationClose from 'material-ui/svg-icons/navigation/close';

class SideMenu extends React.Component {
  render() {
    return (
      <Drawer open={this.props.menuOpen}>
        <AppBar
          title={<span>GGEA Repo</span>}
          iconElementLeft={<IconButton><NavigationClose /></IconButton>}
          onLeftIconButtonTouchTap={this.props.toggleMenu}
        />
        <Menu onItemTouchTap={this.props.toggleMenu}>
          <MenuItem><Link to={`/em-teste`}>Publicações científicas</Link></MenuItem>
          <MenuItem><Link to={`/em-teste`}>Sobre o GGEA</Link></MenuItem>
          <MenuItem><Link to={`/not-found`}>Desenvolvimento</Link></MenuItem>
        </Menu>
      </Drawer>
    );
  }
}

SideMenu.propTypes = {
  menuOpen: PropTypes.bool.isRequired,
  toggleMenu: PropTypes.func.isRequired
}

export default SideMenu;