import React from "react";

class MenuItem extends React.Component {
  constructor(props) {
    super(props);
    this.color = `hsl(${358*Math.random()}, 80%, 60%)`;
  }

  componentWillReceiveProps({isOpen}) {
    this.className = isOpen ? "show" : "hide";
  }

  render() {
    return (
      <li
        style={{
          backgroundColor: this.color,
          animationDelay: this.props.idx * 100 + "ms"
        }}
        className={"list-item " + this.className}>
        <span
          className={this.className}
          style={{animationDelay: (500 + this.props.idx * 100) + "ms"}}>
          <i className={`fa fa-${ this.props.icon }`} />
          { this.props.children }
        </span>
      </li>
    );
  }
}

export default MenuItem;