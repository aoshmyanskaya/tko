import React from 'react';
import LogoImage from 'public/images/logo.png';

import { Button } from 'react-bootstrap';
import { Link } from 'react-router';

class HeaderBar extends React.Component {
  constructor(props) {
    super(props);
    if (window.innerWidth < 500) {
      this.props.drawerToggle();
    }
  }

  render() {
    return (
      <div className="header-fixed">
        <header id="header">
          <div className="headerbar">
            <div className="headerbar-left">
              <ul className="header-nav header-nav-options">
                <li className="header-nav-brand">
                  <div className="brand-holder">
                    <Link to="/">
                      <img className="headerLogo" src={LogoImage} alt="headerLogo"/>
                    </Link>
                  </div>
                </li>
                <li>
                  <Button className="btn-icon-toggle" onClick={this.props.drawerToggle}>
                    <span className="fa fa-bars"></span></Button>
                </li>
              </ul>
            </div>
          </div>
        </header>
      </div>
    )
  }
}

export default HeaderBar;
