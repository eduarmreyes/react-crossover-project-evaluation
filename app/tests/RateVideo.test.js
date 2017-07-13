import React from 'react';
import TestUtils from 'react/lib/ReactTestUtils';
import RateVideo from '../components/RateVideo';

describe('RateVideo', () => {
	const video = {
		_id : "5964e0fdc1c2f54ed40872e4",
		name : "[0] Getting Started With ReactJs",
		description : "React.js is a JavaScript library for building user interfaces...",
		url : "videos/Getting_Started_With_React.js.mp4",
		ratings : [
			1,
			5,
			5,
			4,
			3,
			4,
			2,
			5,
			2,
			3,
			3,
			5,
			1,
			1,
			4,
			4,
			4,
			4,
			1
		],
		__v : 11
	};
  it('renders <RateVideo />', () => {
  	const shallowRenderer = TestUtils.createRenderer();
  	shallowRenderer.render(<RateVideo videoId={ video._id } ratings={ video.ratings } />);
    expect(shallowRenderer).toBeTruthy();
  });

  it('should shallow render 5	stars', () => {
  	const shallowRenderer = TestUtils.createRenderer();
  	shallowRenderer.render(<RateVideo videoId={ video._id } ratings={ video.ratings } />);
  	expect(shallowRenderer.getRenderOutput().props.children.length).toBe(5);
  });

  it('1 component should have fa-star className', () => {
  	const shallowRenderer = TestUtils.createRenderer();
  	shallowRenderer.render(<RateVideo videoId={ video._id } ratings={ video.ratings } />);
  	expect(shallowRenderer.getRenderOutput().props.children[0].props.className).toBe('fa fa-star rate-video');
  });

  it('1 component should have fa-star-o className', () => {
  	const shallowRenderer = TestUtils.createRenderer();
  	shallowRenderer.render(<RateVideo videoId={ video._id } ratings={ video.ratings } />);
  	expect(shallowRenderer.getRenderOutput().props.children[4].props.className).toBe('fa fa-star-o rate-video');
  });
});
