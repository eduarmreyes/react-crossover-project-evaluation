import React, { Component } from 'react';
import { Link } from 'react-router';
import LazyLoad from 'react-lazyload';
import VideosListStore from '../stores/VideosListStore';
import VideosListActions from '../actions/VideosListActions';
import RateVideo from './RateVideo';

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
			return(
			  <LazyLoad height={ 200 } once key={ videoId } >
					<li className='animated fadeIn'>
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
									<RateVideo videoId={ video._id } ratings={ video.ratings } />
									<p className='block-with-text'>{ video.description }</p>
								</div>
							</div>
						</div>
					</li>
			  </LazyLoad>
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