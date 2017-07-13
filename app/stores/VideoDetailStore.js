import alt from '../alt';
import VideoDetailActions from '../actions/VideoDetailActions';

class VideoDetailStore {
	constructor() {
		this.bindActions(VideoDetailActions);
		this.video = [];
	}

	onGetVideoSuccess(response) {
		debugger;
		if (response.status === "success") {
			this.video = response.data;
		} else {
			toastr.error(response.error);
		}
	}

	onGetVideoFail(jqXhr) {
  	let errorMessage = jqXhr.responseJSON && jqXhr.responseJSON.error || jqXhr.responseText || jqXhr.statusText;
		toastr.error(errorMessage);
	}
}

export default alt.createStore(VideoDetailStore);