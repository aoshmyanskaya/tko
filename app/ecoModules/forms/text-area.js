import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import { stateToClassnames, getErrorBlock } from './utils';

class TextArea extends Component {

  render() {
    const classes = stateToClassnames(this.props);

    const formControl = (
      <FormControl
        onChange={this.props.onChange}
        name={this.props.name}
        componentClass="textarea"
        placeholder={this.props.placeholder}
        disabled={this.props.disabled}
        rows={this.props.rows} />
    );

    const errorBlock = getErrorBlock(this.props);

    return (
      <FormGroup
        className={classes}
        controlId={this.props.controlId}
      >
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

TextArea.defaultProps = {
  disabled: false,
};

TextArea.propTypes = {
  controlId: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  horizontal: PropTypes.bool,
  wrapClass: PropTypes.string,
  labelClass: PropTypes.string,
};

export default TextArea;
