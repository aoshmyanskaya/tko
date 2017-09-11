import React from 'react';

import UIElementsFolder from './UIElementsFolder';
import UINavItem from './UINavItem';
import { translations } from './translations';

class NavigationBar extends React.Component {
  render() {
    return (
      <div className={"menubar menubar-inverse " + (this.props.expanded ? 'menubar-expanded' : '')}>
        <UIElementsFolder title={translations.users} expanded={this.props.expanded}>
          <UINavItem uiOrder="First" href="/users/sub_1">{translations.users_sub_1}</UINavItem>
          <UINavItem uiOrder="Mid" href="/users/sub_2">{translations.users_sub_2}</UINavItem>
        </UIElementsFolder>
        <UIElementsFolder title={translations.devices} expanded={this.props.expanded}>
          <UINavItem uiOrder="First" href="/devices/sub_1">{translations.devices_sub_1}</UINavItem>
          <UINavItem uiOrder="Mid" href="/devices/sub_2">{translations.devices_sub_2}</UINavItem>
        </UIElementsFolder>
        <UIElementsFolder title={translations.reports} expanded={this.props.expanded}>
          <UINavItem uiOrder="First" href="/reports/sub_1">{translations.reports_sub_1}</UINavItem>
        </UIElementsFolder>
        <UIElementsFolder title={translations.help} expanded={this.props.expanded}>
          <UINavItem uiOrder="First" href="/help/sub_1">{translations.help_sub_1}</UINavItem>
          <UINavItem uiOrder="Mid" href="/help/sub_2">{translations.help_sub_2}</UINavItem>
        </UIElementsFolder>
      </div>
    )
  }
}

export default NavigationBar;
