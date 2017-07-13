import alt from '../alt';
import LoginActions from '../actions/LoginActions';

class LoginStore {
	constructor() {
		this.bindActions(LoginActions);
		this.username = '';
		this.password = '';
		this.jwt = '';
	}

	onUpdateUsername(event) {
		this.username = event.target.value;
	}

	onUpdatePassword(event) {
		this.password = event.target.value;
	}

	onIsLoggedIn(payload) {
		this.jwt = (typeof localStorage !== 'undefined') ? localStorage.getItem('jwt') : '';
		if (!this.jwt && payload.history) {
			payload.history.pushState(null, '/');
		}
		if (this.jwt && window.location.pathname === '/' && payload.history) {
			payload.history.pushState(null, '/home');
		}
	}

	onLoginUserSuccess(payload) {
		this.password = '';
		if (payload.error) {
			payload.loginForm.classList.add('shake');
			setTimeout(() => {
				payload.loginForm.classList.remove('shake');
			}, 1000);
			toastr.error(payload.error);
			return;
		}

		let jwt = payload.sessionId;

		localStorage.setItem('jwt', jwt);
		this.jwt = jwt;

		this.username = '';

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

	onRedirectToHome(payload) {
		payload.history.pushState(null, '/home/');
	}
}

export default alt.createStore(LoginStore);