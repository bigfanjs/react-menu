import React from 'react';

import NavBar from './components/nav-bar';
import Menu from './components/menu';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false
    };

    this.handleMenuOpen = this.handleMenuOpen.bind(this);
    this.handleMenuClose = this.handleMenuClose.bind(this);
  }

  handleMenuOpen() {
    document.body.style.overflowY = 'hidden';
    this.setState({
      menuOpen: true
    });
  }

  handleMenuClose() {
    document.body.style.overflowY = 'visible';
    this.setState({
      menuOpen: false
    });
  }

  render() {
    return (
      <div>
        <NavBar onOpen={this.handleMenuOpen} isOpen={this.state.menuOpen} />
        <Menu onClose={this.handleMenuClose} isOpen={this.state.menuOpen} />
      </div>
    );
  }
}

export default App;