import alt from '../alt';
import LogoutActions from '../actions/LogoutActions';

class LogoutStore {
	constructor() {
		this.bindActions(LogoutActions);
	}

	onLogoutSuccess(payload) {
		if (payload.status && payload.status === "success") {
			localStorage.removeItem('jwt');
			payload.history.pushState(null, '/');
			return;
		}

		toastr.error(payload.error);
	}

	onLogoutFail(jqXhr) {
		let errorMessage = jqXhr.responseJSON && jqXhr.responseJSON.error || jqXhr.responseText || jqXhr.statusText;
		toastr.error(errorMessage);
	}
}

export default alt.createStore(LogoutStore);