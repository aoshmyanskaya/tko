import React from 'react';

import { Button } from 'react-bootstrap';
import Ink from 'react-ink';

class UIElementsFolder extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hideList: false, activeKey: 1 };
    this.toggleList = this.toggleList.bind(this);
  }

  toggleList() {
    this.setState(prevState => ({
      hideList: !prevState.hideList
    }));
  }

  render() {
    return (
      <div hidden={!this.props.expanded} style={{ overflow: 'hidden' }}>
        <Button
          block
          onClick={this.toggleList}
          bsStyle="default"
          style={{ display: 'flex', alignItems: 'center', position: 'relative', lineHeight: '1.6em', minWidth: '240px', height: 'auto', minHeight: '5em', whiteSpace: 'normal' }}
          className="btn-flat btn-folder"
        >
          <span className="pull-left">
            <i className={"fa fa-puzzle-piece " + (this.state.hideList ? 'btn-folderIcon' : 'btn-folderIcon-active')}></i>
          </span>
          <span>{this.props.title}</span>
          <Ink />
        </Button>
        <div className={(this.state.hideList ? 'folderClosed' : 'folderOpened')}>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default UIElementsFolder;
