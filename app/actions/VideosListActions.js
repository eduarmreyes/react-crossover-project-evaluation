import alt from '../alt';

class VideosListActions {
	constructor() {
		this.generateActions(
			'getVideosSuccess',
			'getVideosFail',
		);
	}

	getVideos(payload) {
		let url = 'http://localhost:3000/videos';
		let params = {
			sessionId: localStorage.getItem('jwt'),
		}
		$.ajax({
			data: params,
			method: 'GET',
			url: url,
		})
		.done((data) => {
			this.actions.getVideosSuccess(data);
		})
		.fail((jqXhr) => {
			this.actions.getVideosFail(jqXhr);
		});
	}
}

export default alt.createActions(VideosListActions);