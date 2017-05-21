import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { indigo500 } from 'material-ui/styles/colors';
import AppBar from 'material-ui/AppBar';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import Drawer from 'material-ui/Drawer';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import Paper from 'material-ui/Paper';
import NavigationClose from 'material-ui/svg-icons/navigation/close';

import Header from './Header';
import Footer from './Footer';

const muiTheme = getMuiTheme({
  appBar: {
    color: indigo500
  }
});

class App extends Component {
  constructor() {
    super();
    this.toggleMenu = this.toggleMenu.bind(this);

    this.state = {
      menuOpen: false
    }

    console.log(muiTheme);
  }

  toggleMenu() {
    this.setState({menuOpen: !this.state.menuOpen})
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div className="App">
          <Header toggleMenu={this.toggleMenu} className="header-bar"/>
          <Drawer open={this.state.menuOpen}>
            <AppBar
              title={<span>GGEA Repo</span>}
              iconElementLeft={<IconButton><NavigationClose /></IconButton>}
              onLeftIconButtonTouchTap={this.toggleMenu}
            />
          </Drawer>
          <div className="main">
            <Paper>
              <h2>Dissertações</h2>
              <p>Lista de dissertações</p>
              <Card>
                <CardHeader
                  title="Without Avatar"
                  subtitle="Subtitle"
                  actAsExpander={true}
                  showExpandableButton={true}
                />
                <CardActions>
                  <FlatButton label="Action1" />
                  <FlatButton label="Action2" />
                </CardActions>
                <CardText expandable={true}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                  Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                  Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                </CardText>
              </Card>
              <Card style={{margin:"10px"}}>
                <CardHeader
                  title="Without Avatar"
                  subtitle="Subtitle"
                  actAsExpander={true}
                  showExpandableButton={true}
                />
                <CardActions>
                  <FlatButton label="Action1" primary={true} />
                  <FlatButton label="Action2" />
                </CardActions>
                <CardText expandable={true}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                  Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                  Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                </CardText>
              </Card>
            </Paper>
          </div>
          <Footer/>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
