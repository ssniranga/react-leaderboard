import React from 'react';
import { shallow, mount, render } from 'enzyme';
import ClassList from "../Component/ClassList";


describe("ComponentName", () => {
    it("should render my component", () => {
    const wrapper = render(<ClassList />);

      expect(wrapper).toMatchSnapshot();
    });
});