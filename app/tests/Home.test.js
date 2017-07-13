import React from 'react';
import TestUtils from 'react/lib/ReactTestUtils';
import Home from '../components/Home';

describe('Home', () => {
  it('renders Home', () => {
  	const shallowRenderer = TestUtils.createRenderer();
  	shallowRenderer.render(<Home />);
    expect(shallowRenderer).toBeTruthy();
  });

  it('should shallow render 2 components', () => {
  	const shallowRenderer = TestUtils.createRenderer();
  	shallowRenderer.render(<Home />);
  	expect(shallowRenderer.getRenderOutput().props.children.length).toBe(2);
  });

  it('1 component should be <Navbar />', () => {
  	const shallowRenderer = TestUtils.createRenderer();
  	shallowRenderer.render(<Home />);
  	expect(typeof shallowRenderer.getRenderOutput().props.children[0].type).toBe('function');
  });

  it('1 component should be <VideosList />', () => {
  	const shallowRenderer = TestUtils.createRenderer();
  	shallowRenderer.render(<Home />);
  	expect(typeof shallowRenderer.getRenderOutput().props.children[1].props.children.type).toBe('function');
  });
});
