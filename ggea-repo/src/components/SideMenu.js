import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import IconButton from 'material-ui/IconButton';
import {List, ListItem} from 'material-ui/List';
import NavigationClose from 'material-ui/svg-icons/navigation/close';

class SideMenu extends React.Component {
  render() {
    return (
      <Drawer open={this.props.menuOpen}>
        <AppBar
          id="bar"
          title={<span>GGEA Repo</span>}
          iconElementLeft={<IconButton><NavigationClose /></IconButton>}
          onLeftIconButtonTouchTap={this.props.toggleMenu}
        />
        <List className="side-menu-list" onClick={this.props.toggleMenu}>
          <ListItem>
            <Link to={`/em-teste`} id="link1">Publicações científicas</Link>
          </ListItem>
          <ListItem>
            <Link to={`/em-teste`}>Sobre o GGEA</Link>
           </ListItem>
          <ListItem>
            <Link to={`/not-found`}>Desenvolvimento</Link>
          </ListItem>
        </List>
      </Drawer>
    );
  }
}

SideMenu.propTypes = {
  menuOpen: PropTypes.bool.isRequired,
  toggleMenu: PropTypes.func.isRequired
}

export default SideMenu;