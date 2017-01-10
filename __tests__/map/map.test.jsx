import React from 'react';
import { mount } from 'enzyme';
import MAP from '../../src/containers/map';
import { MAP_SETTINGS } from '../../src/constants';

describe('Map', () => {
  const Map = mount(<MAP
    apiSettings={MAP_SETTINGS.API}
    defaultSettings={MAP_SETTINGS.SETTINGS}
    options={MAP_SETTINGS.OPTIONS}
  />);

  it('Rendered', () => {
    expect(Map.find('.map').length).toBe(1);
  });
console.log(Map.props)
  it('Has an inner Google Maps', () => {
    expect(Map.find('.map').children().length).toBeGreaterThanOrEqual(1);
  });
});