import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap';

class StaticInput extends Component {
  render() {
    const formControl =
      <FormControl.Static>
        {this.props.value}
      </FormControl.Static>;

    return (
      <FormGroup>
        <ControlLabel className={this.props.labelClass}>{this.props.label}</ControlLabel>
        {!this.props.horizontal && formControl}
        {this.props.horizontal &&
          <div className={this.props.wrapClass}>
            {formControl}
          </div>
          }
      </FormGroup>
    )
  }
}

StaticInput.defaultProps = {
  horizontal: false,
};

StaticInput.propTypes = {
  horizontal: PropTypes.bool,
  wrapClass: PropTypes.string,
  labelClass: PropTypes.string,
  label: PropTypes.string,
};

export default StaticInput;
