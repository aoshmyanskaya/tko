import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Checkbox extends Component {
  render() {
    return (
      <div className="checkbox checkbox-styled">
        <label>
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
      </div>
    )
  }
}

Checkbox.defaultProps = {
  disabled: false,
  checked: false,
};

Checkbox.propTypes = {
  value: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  disabled: PropTypes.bool,
  checked: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
};

export default Checkbox;
