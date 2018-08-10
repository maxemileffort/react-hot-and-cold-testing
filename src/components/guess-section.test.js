import React from 'react';
import {shallow, mount} from 'enzyme';

import GuessSection from './guess-section';

describe('<GuessSection />', () => {
    it('Renders without crashing', () => {
        shallow(<GuessSection />);
    });

    it('Renders Feedback and GuessForm', () => {
        const wrapper = shallow(<GuessSection />);
        expect(wrapper.find('Feedback')).toHaveLength(1)
        expect(wrapper.find('GuessForm')).toHaveLength(1)
    });
    
});