import React, { Component } from 'react';
import { Accordion } from 'react-bootstrap';

class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = { activeKey: '1' };
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(activeKey) {
    this.setState({ activeKey: activeKey });
  }

  render() {
    return (
      <Accordion activeKey={this.state.activeKey} onSelect={this.handleSelect}>
        {this.props.children}
      </Accordion>
    )
  }
}

export default Cards;
