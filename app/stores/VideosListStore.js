import alt from '../alt';
import VideosListActions from '../actions/VideosListActions';

class VideosListStore {
	constructor() {
		this.bindActions(VideosListActions);
		this.videos = [];
	}

	onGetVideosSuccess(response) {
		if (response.status === "success") {
			this.videos = response.data;
		} else {
			toastr.error(response.error);
		}
	}

	onGetVideosFail(jqXhr) {
  	let errorMessage = jqXhr.responseJSON && jqXhr.responseJSON.error || jqXhr.responseText || jqXhr.statusText;
		toastr.error(errorMessage);
	}
}

export default alt.createStore(VideosListStore);