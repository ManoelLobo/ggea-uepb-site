import React from 'react';
import PropTypes from 'prop-types';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import FileDownload from 'material-ui/svg-icons/file/file-download';

class Publication extends React.Component {
  constructor() {
    super();

    this.toggleExpand = this.toggleExpand.bind(this);

    this.state = {
      expanded: false
    }
  }

  toggleExpand() {
    this.setState({expanded: !this.state.expanded});
  }

  render() {
    const pub = this.props.pub;
    return (
      <Card expanded={this.state.expanded} onExpandChange={this.toggleExpand} className="literature">
        <CardHeader
          title={<span>{pub.title}{pub.subtitle? <span style={{fontWeight: "normal"}}>: {pub.subtitle}</span> : ''}</span>}
          subtitle={`${pub.author.slice().join('; ')} (${pub.year})`}
          actAsExpander={true}
          showExpandableButton={true}
        />
        <CardActions>
          <FlatButton label="Informações" onTouchTap={this.toggleExpand} />
          <FlatButton label="Baixar arquivo" icon={<FileDownload/>} />
        </CardActions>
        <CardText expandable={true}>
          <p><strong>Resumo</strong><br/>
          {pub.abstract}</p>
          <p><strong>Palavras-chave</strong>: {pub.keywords.slice().join(', ')}</p>
        </CardText>
      </Card>
    );
  }
}

Publication.propTypes = {
  pub: PropTypes.object.isRequired
}

export default Publication;