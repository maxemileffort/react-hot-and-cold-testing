import React from 'react';
import {shallow, mount} from 'enzyme';

import Feedback from './feedback';

describe('<Feedback />', () => {
    it('Renders without crashing', () => {
        shallow(<Feedback />);
    });

    it('Renders guessAgain based on key', () => {
        const wrapper = shallow(<Feedback />);
        //for 0, we expect no span
        wrapper.setProps({guessCount: 0})
        expect(wrapper.exists('span')).toEqual(false)
        //for any other number, we expect a span
        wrapper.setProps({guessCount: Math.floor(Math.random * 100 + 1)})
        wrapper.update();
        expect(wrapper.exists('span')).toEqual(true)
    });


    
});