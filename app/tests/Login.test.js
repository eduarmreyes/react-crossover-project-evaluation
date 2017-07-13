import React from 'react';
import TestUtils from 'react/lib/ReactTestUtils';
import Login from '../components/Login';

describe('Login', () => {
  it('renders login', () => {
    const loginElement = TestUtils.renderIntoDocument(<Login />);
    expect(loginElement).toBeTruthy();
  });

  it('should render input.username', () => {
    const loginElement = TestUtils.renderIntoDocument(<Login />);
    const inputUsername = TestUtils.findRenderedDOMComponentWithClass(loginElement, 'username');
  	expect(typeof inputUsername).toBe('object');
  })

  it('should render input.password', () => {
    const loginElement = TestUtils.renderIntoDocument(<Login />);
    const inputPassword = TestUtils.findRenderedDOMComponentWithClass(loginElement, 'password');
  	expect(typeof inputPassword).toBe('object');
  })
});
