import React from 'react';
import { mount } from 'enzyme';
import ML from '../../src/components/lists-block/marks-list/marks-list';

describe('Marks List', () => {
  const MarksList = mount(<ML/>).find('.marks-list');

  it('Rendered', () => {
    expect(MarksList.length).toBe(1);
  });

  it('Has an item', () => {
      expect(MarksList.find('.marks-list-item').length).toBeGreaterThanOrEqual(1);
  });
});