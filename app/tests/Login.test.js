import React from 'react';
import { shallow } from 'enzyme';
import Login from '../components/Login';

describe('<Login />', () => {
	const renderedComponent = shallow(
		<Login />
	);

	it('should render a .login-box', () => {
		expect(renderedComponent.find('.login-box').length).toEqual(1);
	});

	it('should render two inputs for username and pwd', () => {
		expect(renderedComponent.find('.username').length).toEqual(1);
		expect(renderedComponent.find('.password').length).toEqual(1);
	});
})
