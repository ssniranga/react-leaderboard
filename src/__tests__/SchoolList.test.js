import React from 'react';
import { shallow, mount, render } from 'enzyme';
import SchoolList from "../Component/SchoolList";


describe("ComponentName", () => {
    it("should render my component", () => {
    const wrapper = render(<SchoolList />);

      expect(wrapper).toMatchSnapshot();
    });
});