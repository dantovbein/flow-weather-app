
import * as React from 'react';
import { shallow } from 'enzyme';
import WeatherDaysList from '.';
import WeatherDaysListItem from '.';

describe('Weather Days List component', () => {
  it('Render 0 WeatherDaysListItem if daysList is empty', () => {
    let daysList = [];
    const wrapper = shallow(<WeatherDaysList days={daysList}/>);
    expect(wrapper.children().find('.AddCity__add-button').length).toEqual(0);
  })
});