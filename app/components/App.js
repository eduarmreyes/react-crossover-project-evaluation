import React, { Component } from 'react';
import Login from './Login';

class App extends Component {
  render() {
    return (
      <div>
      	<Login history={ this.props.history } />
        { this.props.children }
      </div>
    );
  }
}

export default App;