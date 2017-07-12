import React, { Component } from 'react';
import RateVideoStore from '../stores/RateVideoStore';
import RateVideoActions from '../actions/RateVideoActions';

class RateVideo extends Component {
	constructor(props) {
		super(props);

		this.state = RateVideoStore.getState();
		this.onChange = this.onChange.bind(this);
	}

	componentDidMount() {
		RateVideoStore.listen(this.onChange);
	}

	componentWillUnmount() {
		RateVideoStore.unlisten(this.onChange);
	}

	onChange(state) {
		this.setState(state);
	}

	handleClick(event) {
		let ratingValue = event.target.getAttribute('data-value');
		RateVideoActions.rateVideo({
			videoId: this.props.videoId,
			rating: ratingValue,
		});
	}

	handleMouseOver(event) {
		// previous stars
		let prevSibling = event.target.previousSibling;
		while(prevSibling) {
			prevSibling.classList.add('fa-star');
			prevSibling.classList.remove('fa-star-o');
			prevSibling = prevSibling.previousSibling;
		}
		// current star
		event.target.classList.add('fa-star');
		event.target.classList.remove('fa-star-o');
		// next stars
		let nextSibling = event.target.nextSibling;
		while (nextSibling) {
			nextSibling.classList.remove('fa-star');
			nextSibling.classList.add('fa-star-o');
			nextSibling = nextSibling.nextSibling;
		}
	}

	handleMouseOut(event) {
		let i = 0,
			j = parseInt(event.target.getAttribute('data-current-avg')),
			childs = event.target.parentNode.childNodes;
		for (i; i < 5; i++) {
			if (i < j) {
				childs[i].classList.add('fa-star');
				childs[i].classList.remove('fa-star-o');
			} else {
				childs[i].classList.add('fa-star-o');
				childs[i].classList.remove('fa-star');
			}
		}
	}

	render() {
		const ratingAvg = this.props.ratings.reduce((a, b, i, arr) => {
			a += b;
			let iReturn = 0;
			if (i === arr.length - 1) {
				if (arr.length !== 0) {
					// I am hesitant on returning the round of it
					// but I need a rounded number
					iReturn = Math.round(a / arr.length);
				}
			} else {
				iReturn = a;
			}
			return iReturn;
		}, 0); // <- fallback 0 if ratings = []
		let i = 1, j = 5;
		let ratingStars = [1,2,3,4,5].map((e) => {
			let o = ( e > ratingAvg ) ? 'fa fa-star-o rate-video' : 'fa fa-star rate-video';
			return (
        <i key={ e } className={ o } onClick={ this.handleClick.bind(this) } onMouseOver={ this.handleMouseOver.bind(this) } onMouseOut={ this.handleMouseOut.bind(this) } data-value={ e } data-current-avg={ ratingAvg }></i>
			);
		});
		return(
			<p>
				{ ratingStars }
			</p>
		);
	}
}

export default RateVideo;