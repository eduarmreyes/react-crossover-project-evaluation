import React from 'react';
import TestUtils from 'react/lib/ReactTestUtils';
import Navbar from '../components/Navbar';

describe('Navbar', () => {
  it('renders <Navbar />', () => {
  	const shallowRenderer = TestUtils.createRenderer();
  	shallowRenderer.render(<Navbar />);
    expect(shallowRenderer).toBeTruthy();
  });

  it('should shallow render 2 components', () => {
  	const shallowRenderer = TestUtils.createRenderer();
  	shallowRenderer.render(<Navbar />);
  	expect(shallowRenderer.getRenderOutput().props.children.length).toBe(2);
  });

  it('1 component should be <Link />', () => {
  	const shallowRenderer = TestUtils.createRenderer();
  	shallowRenderer.render(<Navbar />);
  	expect(typeof shallowRenderer.getRenderOutput().props.children[0].type).toBe('function');
  });

  it('1 component should be div', () => {
  	const shallowRenderer = TestUtils.createRenderer();
  	shallowRenderer.render(<Navbar />);
  	expect(typeof shallowRenderer.getRenderOutput().props.children[1].type).toBe('string');
  });
});
