import React from "react";

import NavItem from "./nav-item";
import MenuIcon from "./menu-icon";

const MenuNavItem = NavItem(MenuIcon);

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      className: "height"
    };
  }

  componentWillReceiveProps({isOpen}) {
    if (isOpen) {
      this.setState({
        className: "low"
      });
    } else {
      setTimeout(() => {
        this.setState({
          className: "height"
        });
      }, 500);
    }
  }

  render() {
    return (
      <nav className={`nav-bar ${ this.state.className }`}>
        <ul>
          <MenuNavItem onOpen={this.props.onOpen} />
        </ul>
      </nav>
    );
  }
}

export default NavBar;