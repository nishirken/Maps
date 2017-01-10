import React from 'react';
import { mount } from 'enzyme';
import MOL from '../../src/components/lists-block/mark-object-list/mark-object-list';

describe('Mark Object List', () => {
  const MarkObjectList = mount(<MOL/>).find('.mark-object-list');

  it('Rendered', () => {
    expect(MarkObjectList.length).toBe(1);
  });
});