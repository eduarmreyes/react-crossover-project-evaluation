import alt from '../alt';
import { assign } from 'underscore';

class LogoutActions {
	constructor() {
		this.generateActions(
			'logoutSuccess',
			'logoutFail',
		);
	}

	logout(payload) {
		let sessionId = localStorage.getItem('jwt');
		$.ajax({
			data: {
				sessionId: sessionId
			},
			url: 'http://localhost:3000/user/logout',
		})
		.done((data) => {
			assign(payload, data);
			this.actions.logoutSuccess(payload);
		})
		.fail((jqXhr) => {
			this.actions.logoutFail(jqXhr);
		});
	}
}

export default alt.createActions(LogoutActions);