import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import Ink from 'react-ink';
import { INK_COLOR } from './constants';

class InkButton extends Component {
  render() {
    return (
      <Button
        bsStyle={this.props.bsStyle}
        style={{ position: this.props.absolute ? 'absolute': 'relative' }}
        className={this.props.classes}
        active={this.props.active}
        disabled={this.props.disabled}
        bsSize={this.props.bsSize}
        block={this.props.block}
        onClick={this.props.onClick}
        href={this.props.href}
        type={this.props.type}
      >
        {this.props.children}
        <Ink style={this.props.dark ? INK_COLOR.WHITE : INK_COLOR.BLACK}/>
      </Button>
    )
  }
};

InkButton.defaultProps = {
  absolute: false,
  type: 'button',
};

InkButton.propTypes = {
  bsStyle: PropTypes.string,
  bsSize: PropTypes.string,
  classes: PropTypes.string,
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  absolute: PropTypes.bool,
  block: PropTypes.bool,
  onClick: PropTypes.func,
  href: PropTypes.string,
  type: PropTypes.string,
};

export default InkButton;
