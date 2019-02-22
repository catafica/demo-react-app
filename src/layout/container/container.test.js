import React from 'react';
import { shallow } from 'enzyme';
import Container from './container';


describe('Container', () => {
  const container = shallow(<Container />);

  it('renders properly', () => {
    expect(container).toMatchSnapshot();
  })

  it('contains the `DogCard` component', () => {
    expect(container.find('Connect(DogCard)').exists()).toBe(true);
  })


})
