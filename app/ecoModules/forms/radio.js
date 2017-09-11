import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Radio extends Component {
  render() {
    return (
      <div className="radio radio-styled">
        <label>
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
      </div>
    )
  }
}

Radio.defaultProps = {
  disabled: false,
  checked: false,
};

Radio.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  label: PropTypes.string,
  disabled: PropTypes.bool,
  checked: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
};

export default Radio;
