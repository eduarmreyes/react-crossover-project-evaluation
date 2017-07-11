import alt from '../alt';
import LoginActions from '../actions/LoginActions';

class LoginStore {
	constructor() {
		this.bindActions(LoginActions);
		this.username = '';
		this.password = '';
	}

	onUpdateUsername(event) {
		this.username = event.target.value;
	}

	onUpdatePassword(event) {
		this.password = event.target.value;
	}

	onLoginUserSuccess(payload) {
		debugger;
		if (payload.error) {
			this.password = '';
			payload.loginForm.classList.add('shake');
			setTimeout(() => {
				payload.loginForm.classList.remove('shake');
			}, 1000);
			toastr.error(payload.error);
			return;
		}

		let jwt = payload.sessionId;

		localStorage.setItem('jwt', jwt);

		payload.history.pushState(null, '/home/');
	}

	onLoginUserFail(payload) {
		this.password = '';
		payload.loginForm.classList.add('shake');
		setTimeout(() => {
			payload.loginForm.classList.remove('shake');
		}, 1000);
		toastr.error("Error while requesting your login, please check your Backend API accepts Crossorigin Requests");
	}
}

export default alt.createStore(LoginStore);