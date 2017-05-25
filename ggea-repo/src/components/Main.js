import React from 'react';
import {Tab, Tabs} from 'material-ui/Tabs';

import Publication from './Publication';

const pub1 = {
  id: 1,
  title: "Gestão de resíduos sólidos em condomínio vertical",
  subtitle: "possibilidades e desafios",
  author: ["DANTAS, Manoel Thiago Nogueira da Silva", "PESSOA, Outra"],
  year: "2017",
  abstract: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sollicitudin sem orci, in lacinia urna sollicitudin sed. Etiam ullamcorper in eros vitae tincidunt. Suspendisse faucibus, nunc ut feugiat iaculis, mauris elit consectetur tortor, eget pharetra neque quam vel eros. Morbi sollicitudin sit amet leo vitae eleifend. Mauris malesuada lectus arcu, at commodo lectus molestie sit amet. Praesent fermentum lorem eget est luctus, ac mollis lacus sodales. Curabitur consequat feugiat mollis nullam.",
  keywords: ["lorem", "ipsum", "dolor"],
  type: "dissert"
}
const pub2 = {
  id: 2,
  title: "Gestão de resíduos sólidos em condomínio vertical ARTICLE",
  subtitle: "possibilidades e desafios",
  author: ["DANTAS, Manoel Thiago Nogueira da Silva", "PESSOA, Outra"],
  year: "2017",
  abstract: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sollicitudin sem orci, in lacinia urna sollicitudin sed. Etiam ullamcorper in eros vitae tincidunt. Suspendisse faucibus, nunc ut feugiat iaculis, mauris elit consectetur tortor, eget pharetra neque quam vel eros. Morbi sollicitudin sit amet leo vitae eleifend. Mauris malesuada lectus arcu, at commodo lectus molestie sit amet. Praesent fermentum lorem eget est luctus, ac mollis lacus sodales. Curabitur consequat feugiat mollis nullam.",
  keywords: ["lorem", "ipsum", "dolor"],
  type: "article"
}
const pub3 = {
  id: 3,
  title: "Gestão de resíduos sólidos em condomínio vertical THESIS",
  subtitle: "possibilidades e desafios",
  author: ["DANTAS, Manoel Thiago Nogueira da Silva", "PESSOA, Outra"],
  year: "2017",
  abstract: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sollicitudin sem orci, in lacinia urna sollicitudin sed. Etiam ullamcorper in eros vitae tincidunt. Suspendisse faucibus, nunc ut feugiat iaculis, mauris elit consectetur tortor, eget pharetra neque quam vel eros. Morbi sollicitudin sit amet leo vitae eleifend. Mauris malesuada lectus arcu, at commodo lectus molestie sit amet. Praesent fermentum lorem eget est luctus, ac mollis lacus sodales. Curabitur consequat feugiat mollis nullam.",
  keywords: ["lorem", "ipsum", "dolor"],
  type: "thesis"
}
const pub4 = {
  id: 1,
  title: "Gestão de resíduos sólidos em condomínio vertical MONO",

  author: ["DANTAS, Manoel Thiago Nogueira da Silva"],
  year: "2017",
  abstract: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sollicitudin sem orci, in lacinia urna sollicitudin sed. Etiam ullamcorper in eros vitae tincidunt. Suspendisse faucibus, nunc ut feugiat iaculis, mauris elit consectetur tortor, eget pharetra neque quam vel eros. Morbi sollicitudin sit amet leo vitae eleifend. Mauris malesuada lectus arcu, at commodo lectus molestie sit amet. Praesent fermentum lorem eget est luctus, ac mollis lacus sodales. Curabitur consequat feugiat mollis nullam.",
  keywords: ["lorem", "ipsum", "dolor"],
  type: "mono"
}

class Main extends React.Component {
  constructor() {
    super();

    this.renderPublication = this.renderPublication.bind(this);

    this.state = {
      publications: {
        1: pub1,
        2: pub2,
        3: pub1,
        4: pub3,
        5: pub4,
        6: pub1,
        7: pub1,
        8: pub2,
        9: pub1,
        10: pub3,
        11: pub4,
        12: pub1
      }
    }
  }

  renderPublication(key) {
    return (
      <Publication key={key} pub={this.state.publications[key]}/>
    );
  }

  render() {
    const pubs = {...this.state.publications};

    return (
      <Tabs>
        <Tab label="Artigos">
          {Object.keys(pubs)
            .filter((key) => {
              return pubs[key].type === "article"
            }).map(this.renderPublication)
          }
        </Tab>
        <Tab label="Monografias e TCCs">
          {Object.keys(pubs)
            .filter((key) => {
              return pubs[key].type === "mono"
            }).map(this.renderPublication)
          }
        </Tab>
        <Tab label="Dissertações">
          {Object.keys(pubs)
            .filter((key) => {
              return pubs[key].type === "dissert"
            }).map(this.renderPublication)
          }
        </Tab>
        <Tab label="Teses">
          {Object.keys(pubs)
            .filter((key) => {
              return pubs[key].type === "thesis"
            }).map(this.renderPublication)
          }
        </Tab>
      </Tabs>
    );
  }
}

export default Main;