import React from 'react';
import { mount } from 'enzyme';
import MapContainer from 'Containers/map/map';
import { MAP_SETTINGS } from 'Constants';

describe('Map', () => {
  const Map = mount(
    <MapContainer
      apiSettings={MAP_SETTINGS.API}
      defaultSettings={MAP_SETTINGS.SETTINGS}
      options={MAP_SETTINGS.OPTIONS}
    />
  );

  it('Rendered', () => {
    expect(Map.find('section').length).toBe(1);
  });

  it('Has an inner Google Maps', () => {
    expect(Map.find('section').children().length).toBeGreaterThanOrEqual(1);
  });
});