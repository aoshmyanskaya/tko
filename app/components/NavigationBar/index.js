import React from 'react';
import { Button } from 'react-bootstrap';
import Ink from 'react-ink';

import UINavItem from './UINavItem';
import { translations } from './translations';

class NavigationBar extends React.Component {
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
      <div className={"menubar menubar-inverse " + (this.props.expanded ? 'menubar-expanded' : '')}>
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
            <span>{translations.uiElemments}</span>
          </Button>
          <div className={(this.state.hideList ? 'folderClosed' : 'folderOpened')}>
            <UINavItem uiOrder="First" href="/react/colors">{translations.colors}</UINavItem>
            <UINavItem uiOrder="Mid" href="/react/typography">{translations.typography}</UINavItem>
            <UINavItem uiOrder="Mid" href="/react/buttons">{translations.buttons}</UINavItem>
            <UINavItem uiOrder="Mid" href="/react/grids">{translations.grids}</UINavItem>
            <UINavItem uiOrder="Mid" href="/react/lists">{translations.lists}</UINavItem>
            <UINavItem uiOrder="Mid" href="/react/tabs">{translations.tabs}</UINavItem>
            <UINavItem uiOrder="Mid" href="/react/accordions">{translations.accordions}</UINavItem>
            <UINavItem uiOrder="Mid" href="/react/tables">{translations.tables}</UINavItem>
            <UINavItem uiOrder="Mid" href="/react/charts">{translations.charts}</UINavItem>
            <UINavItem uiOrder="Last" href="/react/forms">{translations.forms}</UINavItem>
          </div>
        </div>
      </div>
    )
  }
}

export default NavigationBar;
