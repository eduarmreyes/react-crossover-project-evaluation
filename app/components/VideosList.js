import React, { Component } from 'react';
import { Link } from 'react-router';
import VideosListStore from '../stores/VideosListStore';
import VideosListActions from '../actions/VideosListActions';

class VideosList extends Component {
	constructor(props) {
		super(props);

		this.state = VideosListStore.getState();
		this.onChange = this.onChange.bind(this);
	}

	componentDidMount() {
		VideosListStore.listen(this.onChange);
		VideosListActions.getVideos(this.props.params);
	}

	componentWillUnmount() {
		VideosListStore.unlisten(this.onChange);
	}

	onChange(state) {
		this.setState(state);
	}

	render() {
		let videosList = this.state.videos.map((video, index) => {
			const videoId = video._id;
			const ratingSum = video.ratings.reduce((a, b) => {
				return a + b;
			});
			let ratingAvg = ratingSum / video.ratings.length;
			let ratingValueMax = video.ratings.length * 5;
			return(
				<li key={ videoId } className='animated fadeIn'>
					<div className='media'>
						<h4 className='media-heading'>{ video.name }</h4>
						<div className='media-middle'>
							<div className='embed-responsive embed-responsive-16by9'>
								<Link to={ `/videos/${videoId} ` }>
									<video className='media-object embed-responsive-item' src={ `http://localhost:3000/${video.url}` } controls>
									</video>
								</Link>
							</div>
						</div>
						<div className='media-body'>
							<div className='media-content'>
								<p><i className='fa fa-star-o'></i> <i className='fa fa-star-o'></i> <i className='fa fa-star-o'></i> <i className='fa fa-star-o'></i> <i className='fa fa-star-o'></i></p>
								<p className='block-with-text'>{ video.description }</p>
							</div>
						</div>
					</div>
				</li>
			);
		})
		return(
			<section className='content'>
				<div className='box box-green'>
					<div className='box-header with-border'>
		        <h3 className='box-title'><i className='fa fa-file-video-o'></i> Videos List</h3>
		      </div>
		      <div className='box-body'>
						<ul className='list-inline'>
							{ videosList }
						</ul>
		      </div>
				</div>
			</section>
		);
	}
}

export default VideosList;