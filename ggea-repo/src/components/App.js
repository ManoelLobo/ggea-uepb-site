import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import SideMenu from './SideMenu';
import NotFound from './NotFound';

import muiTheme from '../theme.js';

class App extends Component {
  constructor() {
    super();

    this.toggleMenu = this.toggleMenu.bind(this);

    this.state = {
      menuOpen: false,
    }
  }

  toggleMenu() {
    this.setState({menuOpen: !this.state.menuOpen})
  }


  render() {
    return (
      <Router>
        <MuiThemeProvider muiTheme={muiTheme}>
          <div className="App">
            <Header toggleMenu={this.toggleMenu}/>
            <SideMenu menuOpen={this.state.menuOpen} toggleMenu={this.toggleMenu}/>
            <Switch>
              <Route path={`/em-teste`} exact component={Main}/>
              <Route component={NotFound}/>
            </Switch>
            <div className="main">
            </div>
            <Footer/>
          </div>
        </MuiThemeProvider>
      </Router>
    );
  }
}

export default App;
