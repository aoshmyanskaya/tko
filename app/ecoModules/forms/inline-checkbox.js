import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InlineCheckbox extends Component {
  render() {
    return (
      <label className={`checkbox-inline checkbox-styled ${this.props.classes}`}>
        <input
          type="checkbox"
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

InlineCheckbox.defaultProps = {
  disabled: false,
  checked: false,
};

InlineCheckbox.propTypes = {
  classes: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  label: PropTypes.string,
  disabled: PropTypes.bool,
  checked: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
};

export default InlineCheckbox;
