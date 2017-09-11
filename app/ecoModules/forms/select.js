import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import { stateToClassnames, getErrorBlock } from './utils';

class Select extends Component {
  render() {
    const classes = stateToClassnames(this.props);

    const formControl = (
      <FormControl
        onChange={this.props.onChange}
        componentClass="select"
        placeholder={this.props.placeholder}
        disabled={this.props.disabled}
        name={this.props.name}
        defaultValue={this.props.defaultValue}
      >
           {this.props.children}
      </FormControl>
    );

    const errorBlock = getErrorBlock(this.props);

    return (
      <FormGroup className={classes} controlId={this.props.controlId}>
        {!this.props.horizontal && formControl}
        <ControlLabel className={this.props.labelClass}>{this.props.label}</ControlLabel>
        {this.props.horizontal &&
          <div className={this.props.wrapClass}>
            {formControl}
          </div>
        }
        {errorBlock}
      </FormGroup>
    )
  }
}

Select.defaultProps = {
  disabled: false,
};

Select.propTypes = {
  controlId: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  horizontal: PropTypes.bool,
  wrapClass: PropTypes.string,
  labelClass: PropTypes.string,
};

export default Select;
