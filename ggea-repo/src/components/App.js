import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import IconButton from 'material-ui/IconButton';
import MenuItem from 'material-ui/MenuItem';
import { Tab, Tabs} from 'material-ui/Tabs';
import NavigationClose from 'material-ui/svg-icons/navigation/close';

import Header from './Header';
import Footer from './Footer';
import Publication from './Publication';

import muiTheme from '../theme.js';

const pub1 = {
  id: 1,
  title: "Gestão de resíduos sólidos em condomínio vertical: possibilidades e desafios",
  author: "DANTAS, Manoel Thiago Nogueira da Silva",
  year: "2017",
  abstract: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sollicitudin sem orci, in lacinia urna sollicitudin sed. Etiam ullamcorper in eros vitae tincidunt. Suspendisse faucibus, nunc ut feugiat iaculis, mauris elit consectetur tortor, eget pharetra neque quam vel eros. Morbi sollicitudin sit amet leo vitae eleifend. Mauris malesuada lectus arcu, at commodo lectus molestie sit amet. Praesent fermentum lorem eget est luctus, ac mollis lacus sodales. Curabitur consequat feugiat mollis nullam.",
  keywords: ["lorem", "ipsum", "dolor"]
}

const pubs = {
  1: pub1,
  2: pub1,
  3: pub1,
  4: pub1
}

class App extends Component {
  constructor() {
    super();
    this.toggleMenu = this.toggleMenu.bind(this);
    this.renderPublication = this.renderPublication.bind(this);

    this.state = {
      menuOpen: false
    }
  }

  toggleMenu() {
    this.setState({menuOpen: !this.state.menuOpen})
  }

  renderPublication(key) {
    return (
      <Publication pub={pubs[key]}/>
    );
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div className="App">
          <Header toggleMenu={this.toggleMenu}/>
          <Drawer open={this.state.menuOpen}>
            <AppBar
              title={<span>GGEA Repo</span>}
              iconElementLeft={<IconButton><NavigationClose /></IconButton>}
              onLeftIconButtonTouchTap={this.toggleMenu}
            />
            <MenuItem>Sobre o GGEA</MenuItem>
            <MenuItem>Desenvolvimento</MenuItem>
          </Drawer>
          <div className="main">
          <Tabs>
            <Tab label="Artigos">
              {Object.keys(pubs).map(this.renderPublication)}
            </Tab>
            <Tab label="Monografias e TCCs">
              {Object.keys(pubs).map(this.renderPublication)}
            </Tab>
            <Tab label="Dissertações">
              {Object.keys(pubs).map(this.renderPublication)}
            </Tab>
            <Tab label="Teses">
              {Object.keys(pubs).map(this.renderPublication)}
            </Tab>
          </Tabs>
          </div>
          <Footer/>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
