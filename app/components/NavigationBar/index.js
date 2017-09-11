import React from 'react';
import { Button } from 'react-bootstrap';
import Ink from 'react-ink';

import LocalizedStrings from 'react-localization';

import UINavItem from './UINavItem';

let strings = new LocalizedStrings({
  en: {
    uiElemments: "UI Elements & Components",
    colors: "Colors",
    typography: "Typography",
    buttons: "Buttons",
    grids: "Grids",
    lists: "Lists",
    tabs: "Tabs",
    accordions: "Accordions",
    tables: "Tables",
    charts: "Charts",
    forms: "Forms"
  },
  fr: {
    uiElemments: "UI Elements & Components",
    colors: "Couleurs",
    typography: "Typographie",
    buttons: "Boutons",
    grids: "Grilles",
    lists: "Listes",
    tabs: "Onglets",
    accordions: "Accordions",
    tables: "les tables",
    charts: "Graphiques",
    forms: "Formes"
  },
  es: {
    uiElemments: "Elementos y componentes de la interfaz de usuario",
    colors: "Colores",
    typography: "Tipografía",
    buttons: "Botones",
    grids: "Cuadrículas",
    lists: "Liza",
    tabs: "Pestañas",
    accordions: "Acordeones",
    tables: "Mesas",
    charts: "Gráficos",
    forms: "Formularios"
  }
});


class NavigationBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hideList: false, activeKey: 1 };
    this.toggleList = this.toggleList.bind(this);
  }

  toggleList() {
    this.setState(prevState => ({
      hideList: !prevState.hideList
    }));
  }

  render() {
    return (
      <div className={"menubar menubar-inverse " + (this.props.expanded ? 'menubar-expanded' : '')}>
        <div hidden={!this.props.expanded} style={{ overflow: 'hidden' }}>
          <Button
            block
            onClick={this.toggleList}
            bsStyle="default"
            style={{ display: 'flex', alignItems: 'center', position: 'relative', lineHeight: '1.6em', minWidth: '240px', height: 'auto', minHeight: '5em', whiteSpace: 'normal' }}
            className="btn-flat btn-folder"
          >
            <span className="pull-left">
              <i className={"fa fa-puzzle-piece " + (this.state.hideList ? 'btn-folderIcon' : 'btn-folderIcon-active')}></i>
            </span>
            <span>{strings.uiElemments}</span>
          </Button>
          <div className={(this.state.hideList ? 'folderClosed' : 'folderOpened')}>
            <UINavItem uiOrder="First" href="/react/colors">{strings.colors}</UINavItem>
            <UINavItem uiOrder="Mid" href="/react/typography">{strings.typography}</UINavItem>
            <UINavItem uiOrder="Mid" href="/react/buttons">{strings.buttons}</UINavItem>
            <UINavItem uiOrder="Mid" href="/react/grids">{strings.grids}</UINavItem>
            <UINavItem uiOrder="Mid" href="/react/lists">{strings.lists}</UINavItem>
            <UINavItem uiOrder="Mid" href="/react/tabs">{strings.tabs}</UINavItem>
            <UINavItem uiOrder="Mid" href="/react/accordions">{strings.accordions}</UINavItem>
            <UINavItem uiOrder="Mid" href="/react/tables">{strings.tables}</UINavItem>
            <UINavItem uiOrder="Mid" href="/react/charts">{strings.charts}</UINavItem>
            <UINavItem uiOrder="Last" href="/react/forms">{strings.forms}</UINavItem>
          </div>
        </div>
      </div>
    )
  }
}

export default NavigationBar;
