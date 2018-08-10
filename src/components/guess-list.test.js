import React from 'react';
import {shallow, mount} from 'enzyme';

import GuessList from './guess-list';

describe('<GuessList />', () => {
    
    it('Renders without crashing', () => {
        let guesses = []
        shallow(<GuessList guesses={guesses}/>);
    });

    it('Renders lis if there are guesses', () => {
        let guesses = [1,5,10]
        const wrapper = shallow(<GuessList guesses={guesses}/>);
        expect(wrapper.exists('li')).toEqual(true);
    });

    
});