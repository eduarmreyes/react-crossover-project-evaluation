import React, { Component } from 'react';
import LoginActions from '../actions/LoginActions';
import Navbar from './Navbar';

class Home extends Component {
	componentDidMount() {
		LoginActions.isLoggedIn({
			history: this.props.history
		});
	}

  render() {
    return (
      <div>
        <Navbar />
        <p>Hello from Home Component</p>
      </div>
    );
  }
}

export default Home;