import React, { Component } from 'react';
import LoginActions from '../actions/LoginActions';

class Home extends Component {
	componentDidMount() {
		LoginActions.isLoggedIn({
			history: this.props.history
		});
	}

  render() {
    return (
      <div className='alert alert-info'>
        Hello from Home Component
      </div>
    );
  }
}

export default Home;