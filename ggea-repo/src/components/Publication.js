import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
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
    const publication = this.props.pub;
    const year = publication.year;

    return (
      <Card expanded={this.state.expanded} onExpandChange={this.toggleExpand} className="literature">
        <CardHeader
          title={<span>{publication.title}: <span style={{fontWeight: "normal"}}>{publication.subtitle}</span></span>}
          subtitle={publication.author.slice().join('; ').concat(' - ').concat(year)}
          actAsExpander={true}
          showExpandableButton={true}
        />
        <CardActions>
          <FlatButton label="Informações" onTouchTap={this.toggleExpand} />
          <FlatButton label="Baixar arquivo" icon={<FileDownload/>} />
        </CardActions>
        <CardText expandable={true}>
          <p><strong>Resumo</strong><br/>
          {publication.abstract}</p>
          <p><strong>Palavras-chave</strong>: {publication.keywords.slice().join(', ')}</p>
        </CardText>
      </Card>
    );
  }
}

Publication.propTypes = {
  pub: PropTypes.object.isRequired,
}

export default Publication;