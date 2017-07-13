import React from 'react';
import TestUtils from 'react/lib/ReactTestUtils';
import VideoDetail from '../components/VideoDetail';

describe('VideoDetail', () => {
  it('renders <VideoDetail />', () => {
  	const shallowRenderer = TestUtils.createRenderer();
  	shallowRenderer.render(<VideoDetail />);
    expect(shallowRenderer).toBeTruthy();
  });

  it('should shallow render 2 components', () => {
  	const shallowRenderer = TestUtils.createRenderer();
  	shallowRenderer.render(<VideoDetail />);
  	expect(shallowRenderer.getRenderOutput().props.children.length).toBe(2);
  });

  it('1 component should be <Navbar />', () => {
  	const shallowRenderer = TestUtils.createRenderer();
  	shallowRenderer.render(<VideoDetail />);
  	expect(typeof shallowRenderer.getRenderOutput().props.children[0].type).toBe('function');
  });

  it('should render a video', () => {
  	const shallowRenderer = TestUtils.createRenderer();
  	shallowRenderer.render(<VideoDetail />);
  	const video = shallowRenderer.getRenderOutput().props.children[1].props.children.props.children[0].props.children.props.children[1].props.children.props.children[0].props.children.props.children.type;
  	expect(video).toBe('video');
  });
});
