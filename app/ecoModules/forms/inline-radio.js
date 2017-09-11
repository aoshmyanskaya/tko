import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InlineRadio extends Component {
  render() {
    return (
      <label className={`radio-inline radio-styled ${this.props.classes}`}>
        <input
          type="radio"
          name={this.props.name}
          value={this.props.value}
          disabled={this.props.disabled}
          checked={this.props.checked}
          onChange={this.props.onChange}
        />
        <span>{this.props.label}</span>
      </label>
    )
  }
}

InlineRadio.defaultProps = {
  disabled: false,
  checked: false,
};

InlineRadio.propTypes = {
  classes: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  label: PropTypes.string,
  disabled: PropTypes.bool,
  checked: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
};

export default InlineRadio;
