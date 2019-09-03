import React from 'react';
import { shallow, mount, render } from 'enzyme';
import StudentList from "../Component/StudentList";


describe("ComponentName", () => {
    it("should render my component", () => {
    const wrapper = render(<StudentList />);

      expect(wrapper).toMatchSnapshot();
    });
});