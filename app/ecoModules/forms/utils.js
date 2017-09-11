import React from 'react';
import classNames from 'classnames';

export const stateToClassnames = (props) => {
  const classes = classNames({
    'floating-label': props.value === '' && props.floating,
    'has-warning': props.hasWarning,
    'has-feedback': props.hasFeedback,
    'has-success': props.hasSuccess,
    'has-error': props.hasError,
  });

  return classes;
};

export const getHelpBlock = (props) => (
  props.helpText && <p className="help-block">{props.helpText}</p>
);

export const getErrorBlock = (props) => (
  props.hasError && props.errors && props.errors.length && <p className="help-block has-error">{props.errors[0]}</p>
);
