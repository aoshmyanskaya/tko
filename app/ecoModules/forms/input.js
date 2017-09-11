import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import { stateToClassnames, getErrorBlock, getHelpBlock } from './utils';

class Input extends Component {
  render() {
    const classes = stateToClassnames(this.props);

    const formControl = (
      <FormControl
        type={this.props.type}
        onChange={this.props.onChange}
        disabled={this.props.disabled}
        readOnly={this.props.readOnly}
        placeholder={this.props.placeholder}
        className={this.props.classes}
        value={this.props.value}
        name={this.props.name}
        data-toggle={this.props.tooltipText ? 'tooltip' : ''}
        data-placement={this.props.tooltipText ? 'bottom' : ''}
        data-trigger={this.props.tooltipText ? 'hover' : ''}
        data-original-title={this.props.tooltipText}
      />
    );

    const controlLabel = <ControlLabel className={this.props.labelClass}>{this.props.label}</ControlLabel>;
    const helpBlock = getHelpBlock(this.props);
    const errorBlock = getErrorBlock(this.props);

    return (
      <FormGroup
        className={classes}
        controlId={this.props.controlId}>
          {this.props.horizontal ?
            [
              controlLabel,
              <div className={this.props.wrapClass}>
                {formControl}
                {helpBlock}
              </div>
            ]
          : [
            formControl,
            helpBlock,
            controlLabel
          ]}
          {this.props.children}
          {errorBlock}
      </FormGroup>
    )
  }
}

Input.defaultProps = {
  type: 'text',
  disabled: false,
  readOnly: false,
  horizontal: false,
};

Input.propTypes = {
  controlId: PropTypes.string,
  horizontal: PropTypes.bool,
  wrapClass: PropTypes.string,
  labelClass: PropTypes.string,
  label: PropTypes.string,
  tooltipText: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  classes: PropTypes.string,
  placeholder: PropTypes.string,
  readOnly: PropTypes.bool,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  type: PropTypes.string.isRequired,
};

export default Input;
