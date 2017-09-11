import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InkButton from '../ink-button';

class LoadingButton extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ isLoading: true });

    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 2000);
  }

  render() {
    let isLoading = this.state.isLoading;
    return (
      <div>
        <InkButton
          bsStyle={this.props.bsStyle}
          disabled={isLoading}
          classes={this.props.classes}
          onClick={!isLoading ? this.handleClick : null}
        >
          {isLoading ? this.props.loadTitle : this.props.children}
        </InkButton>
      </div>
    )
  }
};

LoadingButton.propTypes = {
  bsStyle: PropTypes.string,
  classes: PropTypes.string,
  loadTitle: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ])
};

export default LoadingButton;
