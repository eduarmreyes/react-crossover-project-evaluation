import React, { Component } from 'react';
import LoginActions from '../actions/LoginActions';
import Navbar from './Navbar';
import VideosList from './VideosList';

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
        <VideosList />
      </div>
    );
  }
}

export default Home;