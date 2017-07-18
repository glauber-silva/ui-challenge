import expect from 'expect';


describe('Array', () => {
  it('should return -1 when the value is not present', () => {
    expect(-1).toBe([1,2,3].indexOf(4));
  });
});

/*
import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './modules/App';

it('renders without crashing', () => {
  const wrapper = mount(<App/>);
  expect(wrapper.find('Tab').to.have.length(1));
});

*/