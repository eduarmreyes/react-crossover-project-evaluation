import React from 'react';
import TestUtils from 'react/lib/ReactTestUtils';
import VideosList from '../components/VideosList';

describe('VideosList', () => {
  it('renders <VideosList />', () => {
  	const shallowRenderer = TestUtils.createRenderer();
  	shallowRenderer.render(<VideosList />);
    expect(shallowRenderer).toBeTruthy();
  });

  it('should shallow render 2 components', () => {
  	const shallowRenderer = TestUtils.createRenderer();
  	shallowRenderer.render(<VideosList />);
  	expect(shallowRenderer.getRenderOutput().props.children.length).toBe(2);
  });

  it('1 component should be a div', () => {
  	const shallowRenderer = TestUtils.createRenderer();
  	shallowRenderer.render(<VideosList />);
  	expect(typeof shallowRenderer.getRenderOutput().props.children[0].type).toBe('string');
  });

  it('should render an unordered list', () => {
  	const shallowRenderer = TestUtils.createRenderer();
  	shallowRenderer.render(<VideosList />);
  	const ul = shallowRenderer.getRenderOutput().props.children[1].props.children;
  	expect(ul.type).toBe('ul');
  });
});
