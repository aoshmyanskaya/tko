import React from 'react';
import { Link } from 'react-router';
import { Button } from 'react-bootstrap';
import Ink from 'react-ink';

class UINavItem extends React.Component {
  render() {
    return (
      <Link to={this.props.href}>
        <Button
          active={this.props.active}
          block
          bsStyle="default"
          style={{ position: 'relative' }}
          className="btn-flat btn-navItem"
        >
          <span className={"menuItemLeftDash" + this.props.uiOrder}></span>
          <span className="menuItemDash"></span>
          <span className="pull-left menuItemPadding">{this.props.children}</span>
          <Ink />
        </Button>
      </Link>
    )
  }
}

export default UINavItem;
