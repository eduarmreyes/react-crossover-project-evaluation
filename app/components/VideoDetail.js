import React, { Component } from 'react';
import LoginActions from '../actions/LoginActions';
import Navbar from './Navbar';
import VideosList from './VideosList';
import VideoDetailStore from '../stores/VideoDetailStore';
import VideoDetailActions from '../actions/VideoDetailActions';
import RateVideo from './RateVideo';

class VideoDetail extends Component {
	constructor(props) {
		super(props);

		this.state = VideoDetailStore.getState();
		this.onChange = this.onChange.bind(this);
	}

	componentDidMount() {
		LoginActions.isLoggedIn({
			history: this.props.history
		});
		VideoDetailStore.listen(this.onChange);
		VideoDetailActions.getVideo(this.props.params);
	}

	componentWillUnmount() {
		VideoDetailStore.unlisten(this.onChange);
	}

	onChange(state) {
		this.setState(state);
	}

	renderVideo() {
		debugger;
		if (this.state.video) {
			return (
      	<div className='box box-green'>
	  			<div className='box-header with-border'>
	          <h3 className='box-title'><i className='fa fa-file-video-o'></i> { this.state.video.name }</h3>
	        </div>
	        <div className='box-body'>
						<div className='media'>
							<div className='media-middle'>
								<div className='embed-responsive embed-responsive-16by9'>
									<video className='media-object embed-responsive-item' src={ `http://localhost:3000/${this.state.video.url}` } controls>
									</video>
								</div>
							</div>
							<div className='media-body'>
								<div className='media-content'>
									<RateVideo videoId={ this.state.video._id } ratings={ this.state.video.ratings || [] } />
									<p className='block-with-text'>{ this.state.video.description }</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			);
		}
	}

  render() {
    return (
      <div>
        <Navbar />
        <div className='content'>
	        <div className='row'>
	        	<div className='col-md-8'>
	        		{ this.renderVideo() }
	        	</div>
	        	<div className='col-md-4'>
		        	<VideosList />
	        	</div>
	        </div>
        </div>
      </div>
    );
  }
}

export default VideoDetail;