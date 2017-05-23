import React from 'react';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import FileDownload from 'material-ui/svg-icons/file/file-download';

class Publication extends React.Component {
  constructor() {
    super();

    this.state = {
      expanded: false
    }
  }

  render() {
    return (
      <Card expanded={this.state.expanded} className="literature">
        <CardHeader
          title={this.props.pub.title}
          subtitle={this.props.pub.author}
          actAsExpander={true}
          showExpandableButton={true}
        />
        <CardActions>
          <FlatButton label="Informações" />
          <FlatButton label="Baixar arquivo" icon={<FileDownload/>} />
        </CardActions>
        <CardText expandable={true}>
          <p><strong>Resumo</strong><br/>
          {this.props.pub.abstract}</p>
          <p><strong>Palavras-chave</strong>: {this.props.pub.keywords.slice().join(', ')}</p>
        </CardText>
      </Card>
    );
  }
}

Publication.propTypes = {
  title: React.PropTypes.string.isRequired,
  author: React.PropTypes.string.isRequired,
  abstract: React.PropTypes.string.isRequired,
  keywords: React.PropTypes.string.isRequired
}

export default Publication;