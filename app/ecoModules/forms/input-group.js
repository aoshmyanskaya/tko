import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {FormGroup, InputGroup, FormControl, ControlLabel } from 'react-bootstrap';
import { stateToClassnames, getErrorBlock } from './utils';

class FormInputGroup extends Component {
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
      />
    );

    const errorBlock = getErrorBlock(this.props);
    const controlLabel = <ControlLabel className={this.props.labelClass}>{this.props.label}</ControlLabel>;

    return (
      <FormGroup
        className={`${classes} ${this.props.divClasses}`}>
        {this.props.horizontal ?
          [
            controlLabel,
            <div className={this.props.wrapClass}>
              <InputGroup>
                {this.props.leadingAddon && <span className="input-group-addon">{this.props.leadingAddon}</span>}
                <div className="input-group-content">
                  {formControl}
                </div>
                {this.props.trailingAddon && <span className="input-group-addon">{this.props.trailingAddon}</span>}
              </InputGroup>
            </div>
          ] :
          <InputGroup>
            {this.props.leadingAddon && <span className="input-group-addon">{this.props.leadingAddon}</span>}
              <div className="input-group-content">
                {formControl}
                {controlLabel}
              </div>
            {this.props.trailingAddon && <span className="input-group-addon">{this.props.trailingAddon}</span>}
          </InputGroup>
        }
      {errorBlock}
      </FormGroup>
    )
  }
}

FormInputGroup.defaultProps = {
  type: 'text',
  disabled: false,
  readOnly: false,
};

FormInputGroup.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  divClasses: PropTypes.string,
  placeholder: PropTypes.string,
  readOnly: PropTypes.bool,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  type: PropTypes.string.isRequired,
  horizontal: PropTypes.bool,
  wrapClass: PropTypes.string,
  labelClass: PropTypes.string,
};

export default FormInputGroup;
