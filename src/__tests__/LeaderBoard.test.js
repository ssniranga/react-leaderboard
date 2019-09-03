import React from 'react';
import { shallow, mount, render } from 'enzyme';
import LeaderBoards from "../Component/LeaderBoards";


describe("ComponentName", () => {
    it("should render my component", () => {
    const wrapper = render(<LeaderBoards />);

      expect(wrapper).toMatchSnapshot();
    });
});