import React from 'react';
import { shallow } from 'enzyme';
import Home from '../components/Home';

describe('<Home />', () => {
	const renderedComponent = shallow(
		<Home />
	);

	it('should render a div', () => {
		expect(renderedComponent.find('div').length).toEqual(1);
	});
})
