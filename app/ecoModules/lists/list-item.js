import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ListGroupItem } from 'react-bootstrap';
import Ink from 'react-ink';

class ListItem extends Component {
  render() {
    return (
      <ListGroupItem
        className={`tile
          ${this.props.classes ? this.props.classes : ''}
          ${this.props.leftActionElement || this.props.leftElement ? 'tileLeftButton' : ''}
          ${this.props.noBorder ? 'listItemNoBorder' : ''}
        `}
        onClick={this.props.onClick}
      >
        {this.props.leftElement}
        <span className={`tile-text
          ${this.props.tileClasses ? this.props.tileClasses : ''}
          ${this.props.leftElement && !this.props.leftActionElement && !this.props.tileClasses ? 'listItemWithIcon' : ''}
          ${this.props.leftActionElement ? 'panelLeftText' : '' }`}
        >
          {this.props.tileText}
          {this.props.tileNote && <small className="tileSmall">{this.props.tileNote}</small>}
        </span>
        {this.props.children}
        {this.props.rightElement}
        <Ink/>
        {this.props.rightActionElement}
        {this.props.leftActionElement}
      </ListGroupItem>
    )
  }
};

ListItem.propTypes = {
  classes: PropTypes.string,
  tileClasses: PropTypes.string,
  tileText: PropTypes.string,
  tileNote: PropTypes.string,
  leftElement: PropTypes.node,
  rightElement: PropTypes.node,
  rightActionElement: PropTypes.node,
  leftActionElement: PropTypes.node,
  onClick: PropTypes.func,
  noBorder: PropTypes.bool,
};

export default ListItem;
