
import * as React from 'react';
import { shallow } from 'enzyme';
import Overlay from '.';
import Spinner from '../Spinner';

describe('Overlay component', () => {
  it('Show spinner and hide message text if message is not set', () => {
    const wrapper = shallow(<Overlay/>);
    expect(wrapper.children().find(Spinner).length).toEqual(1);
    expect(wrapper.children().find('.Overlay__message').length).toEqual(0);
  })
  it('Show message text if message is set', () => {
    const wrapper = shallow(<Overlay message="Loading..."/>);
    expect(wrapper.children().find('.Overlay__message').length).toEqual(1);
  })
});