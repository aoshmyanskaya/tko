/**
 *
 * App.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React, { PropTypes } from 'react';
import { Grid } from 'react-bootstrap';

import HeaderBar from 'components/HeaderBar';
import NavigationBar from 'components/NavigationBar';

class App extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props);
    this.state = { expanded: true };
    this.drawerToggle = this.drawerToggle.bind(this);
  }

  drawerToggle() {
    this.setState(prevState => ({
      expanded: !prevState.expanded
    }));
  }

  render() {
    return (
      <div>
        <Grid fluid={true}>
          <HeaderBar drawerToggle={this.drawerToggle}/>
          <NavigationBar expanded={this.state.expanded}/>
          {/*<StyleGuide expanded={this.state.expanded}/>*/}
          {React.Children.toArray(this.props.children)}
        </Grid>
      </div>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.node,
};

export default App;
