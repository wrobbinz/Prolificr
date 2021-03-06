import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Menu, Icon, Popup } from 'semantic-ui-react';
import AppOptions from './appOptions/appOptions';
import './sideNav.css';


const menuItems = [
  {
    name: 'board',
    icon: 'signal',
    tooltip: 'Board',
    flipped: 'vertically',
  },
  {
    name: 'notes',
    icon: 'sticky note',
    tooltip: 'Notes',
  },
  {
    name: 'drive',
    icon: 'disk',
    tooltip: 'Drive',
  },
];

class SideNav extends Component {
  static propTypes = {
    focus: PropTypes.string.isRequired,
    setFocus: PropTypes.func.isRequired,
    setUser: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  handleClick = (e, { focus }) => {
    this.props.setFocus(focus);
  }

  render() {
    return (
      <Menu
        className="full-height sidenav no-border-radius no-margin"
        floated
        vertical
        inverted
        icon
      >
        {menuItems.map(item => (
          <Popup
            key={item.name}
            mouseEnterDelay={500}
            content={item.tooltip}
            position="right center"
            size="mini"
            inverted
            trigger={
              <Menu.Item
                focus={item.name}
                className="no-border-radius"
                onClick={this.handleClick}
                active={this.props.focus === item.name}
              >
                <Icon link size="large" name={item.icon} flipped={item.flipped} />
              </Menu.Item>
            }
          />
        ))}
        <AppOptions setUser={this.props.setUser} />
      </Menu>
    );
  }
}

export default SideNav;
