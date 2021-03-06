import React from 'react';
import {shallow, mount} from 'enzyme';

import AuralStatus from './aural-status';

describe('<AuralStatus />', () => {
    it('Renders without crashing', () => {
        shallow(<AuralStatus />);
    });

    it('Renders invisibly', () => {
        const wrapper = shallow(<AuralStatus />);
        expect(wrapper.hasClass('visuallyhidden')).toEqual(true);
    });
});