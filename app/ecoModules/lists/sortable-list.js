import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {SortableContainer, SortableElement, arrayMove} from 'react-sortable-hoc';

const SortableItem = SortableElement(({value}) =>
  <li className="tile">
    <a className="tile-content ink-reaction">
      <div className="tile-text">
        {value}
      </div>
      <div className="tile-icon">
        <i className="fa faLeftPad fa-bars"></i>
      </div>
    </a>
  </li>
);

const SortableListWrap = SortableContainer(({items}) => {
  return (
    <ul className="list" data-sortable="true">
      {items.map((value, index) => (
        <SortableItem
          key={`item-${index}`}
          index={index}
          value={value}
        >
        </SortableItem>
      ))}
    </ul>
  );
});

class SortableList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: props.data,
    };

    this.onSortEnd  = this.onSortEnd.bind(this);
  }

  onSortEnd ({oldIndex, newIndex}) {
    this.setState({
      items: arrayMove(this.state.items, oldIndex, newIndex),
    });
  }

  render() {
    return (
      <SortableListWrap
        items={this.state.items}
        onSortEnd={this.onSortEnd}
        lockAxis="y"
        helperClass="list-item-dragged"
        lockToContainerEdges={true}
      />
    )
  }
}

SortableList.propTypes = {
  data: PropTypes.array.required,
};

export default SortableList;
