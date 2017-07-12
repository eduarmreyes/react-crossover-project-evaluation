import alt from '../alt';
import RateVideoStore from '../stores/RateVideoStore';

class RateVideoActions {
	constructor() {
		this.generateActions(
			'rateVideoSuccess',
			'rateVideoFail',
		);
	}

	rateVideo(params) {
		const url = 'http://localhost:3000/video/ratings?sessionId=' + localStorage.getItem('jwt');
		$.ajax({
			data: params,
			method: 'POST',
			url: url,
		})
		.done((data) => {
			this.actions.rateVideoSuccess(data);
		})
		.fail((jqXhr) => {
			this.actions.rateVideoFail(jqXhr);
		});
	}
}

export default alt.createActions(RateVideoActions);