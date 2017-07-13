import React from 'react';
import TestUtils from 'react/lib/ReactTestUtils';
import Login from '../components/Login';

describe('Login', () => {
  it('renders login', () => {
  	const shallowRenderer = TestUtils.createRenderer();
  	shallowRenderer.render(<Login />);
    expect(shallowRenderer).toBeTruthy();
  });

  it('should render input.username', () => {
    const loginElement = TestUtils.renderIntoDocument(<Login />);
    const inputUsername = TestUtils.findRenderedDOMComponentWithClass(loginElement, 'username');
  	expect(typeof inputUsername).toBe('object');
  });

  it('should render input.password', () => {
    const loginElement = TestUtils.renderIntoDocument(<Login />);
    const inputPassword = TestUtils.findRenderedDOMComponentWithClass(loginElement, 'password');
  	expect(typeof inputPassword).toBe('object');
  });

  it('should render button.btn', () => {
    const loginElement = TestUtils.renderIntoDocument(<Login />);
    const buttonLogin = TestUtils.findRenderedDOMComponentWithClass(loginElement, 'btn');
  	expect(typeof buttonLogin).toBe('object');
  });

  it('should simulate click on button.btn', () => {
    const loginElement = TestUtils.renderIntoDocument(<Login />);
    const buttonLogin = TestUtils.findRenderedDOMComponentWithClass(loginElement, 'btn');
    TestUtils.Simulate.click(buttonLogin);
  	expect(buttonLogin.classList.contains('has-error')).toBe(true);
  });

  it('should shallow render 2 components', () => {
  	const shallowRenderer = TestUtils.createRenderer();
  	shallowRenderer.render(<Login />);
  	expect(shallowRenderer.getRenderOutput().props.children.length).toBe(2);
  });
});
