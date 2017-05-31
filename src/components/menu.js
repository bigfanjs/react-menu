import React from "react";

import MenuItem from "./menu-item";
import MenuClose from "./menu-close";

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {name: "Home", icon: "home"},
        {name: "Profile", icon: "user"},
        {name: "Messages", icon: "comment"},
        {name: "Followers", icon: "user-plus"},
        {name: "Help", icon: "question-circle"},
        {name: "Settings", icon: "cog"}
      ],
      menuOpened: false
    };

    this.callbackQueue = [];
  }

  render() {
    return (
      <div>
        <ul className="menu">
          { this.state.items.map((item, idx) => (
              <MenuItem
                isOpen={this.props.isOpen}
                className="list-item"
                key={item.name}
                idx={idx}
                icon={item.icon}>
                { item.name }
              </MenuItem>
            )) }
        </ul>
        <MenuClose onClose={this.props.onClose} isOpen={this.props.isOpen} />
      </div>
    );
  }
}

export default Menu;