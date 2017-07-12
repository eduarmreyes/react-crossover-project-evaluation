import React, { Component } from 'react';
import LogoutStore from '../stores/LogoutStore';
import LogoutActions from '../actions/LogoutActions';

class Logout extends Component {
	componentDidMount() {
		LogoutActions.logout({
			history: this.props.history
		});
	}

	render() {
		return(
			<div>
				Removing your session...
			</div>
		);
	}
}

export default Logout;