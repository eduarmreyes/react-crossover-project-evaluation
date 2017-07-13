import alt from '../alt';

class VideoDetailActions {
	constructor() {
		this.generateActions(
			'getVideoSuccess',
			'getVideoFail',
		);
	}

	getVideo(payload) {
		let url = 'http://localhost:3000/video';
		let params = {
			sessionId: localStorage.getItem('jwt'),
			videoId: payload.videoId,
		}
		$.ajax({
			data: params,
			method: 'GET',
			url: url,
		})
		.done((data) => {
			this.actions.getVideoSuccess(data);
		})
		.fail((jqXhr) => {
			this.actions.getVideoFail(jqXhr);
		});
	}
}

export default alt.createActions(VideoDetailActions);