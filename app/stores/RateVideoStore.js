import alt from '../alt';
import RateVideoActions from '../actions/RateVideoActions';

class RateVideoStore {
	constructor() {
		this.bindActions(RateVideoActions);
		this.video = {};
	}

	onRateVideoSuccess(response) {
		if (response.status === "success") {
			this.video = response.data;
			// re-calculate currentRating
			toastr.success(`Your rating was ${response.status}fully recorded.`);
		} else {
			toastr.error(response.error);
		}
	}

	onRateVideoFail(jqXhr) {
  	let errorMessage = jqXhr.responseJSON && jqXhr.responseJSON.error || jqXhr.responseText || jqXhr.statusText;
		toastr.error(errorMessage);
	}
}

export default alt.createStore(RateVideoStore);