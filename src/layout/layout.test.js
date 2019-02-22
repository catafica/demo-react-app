import React from 'react';
import { shallow } from 'enzyme';
import Layout from './layout';


describe('Layout', () => {
  const layout = shallow(<Layout />);

  it('renders properly', () => {
    expect(layout).toMatchSnapshot();
  })

  it('contains the sidemenu component', () => {
    expect(layout.find('Connect(SideMenu)').exists()).toBe(true);
  })

  it('contains the container component', () => {
    expect(layout.find('Container').exists()).toBe(true);
  })
})
