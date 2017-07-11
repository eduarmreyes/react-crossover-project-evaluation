import alt from '../alt';
import { assign } from 'underscore';

class LoginActions {
	constructor() {
		this.generateActions(
			'updateUsername',
			'updatePassword',
			'loginUserSuccess',
			'loginUserFail',
			'isLoggedIn',
			'redirectToHome',
		);
	}

	loginUser(payload) {
		$.ajax({
			url: 'http://localhost:3000/user/auth',
			method: 'POST',
			data: {
				username: payload.username,
				password: payload.password,
			}
		})
		.done((data) => {
			assign(payload, data);
			this.actions.loginUserSuccess(payload);
		})
		.fail(() => {
			this.actions.loginUserFail(payload);
		});
	}
}

export default alt.createActions(LoginActions);