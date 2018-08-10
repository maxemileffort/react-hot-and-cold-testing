import React from 'react';
import {shallow, mount} from 'enzyme';

import Game from './game';

describe('<Game />', () => {
    it('Renders without crashing', () => {
        shallow(<Game />);
    });

    it('Starts a new game', () => {
        const wrapper = shallow(<Game />);
        const state = {
            guesses: [1,2,3,4,5,6],
            feedback: 'Hot',
            auralstatus: 'Game being played',
            CorrectAnswer: -5 //Negative so random number generated doesn't accidently match
        }
        wrapper.setState({state});
        wrapper.instance().restartGame();
        expect(wrapper.state('guesses')).toEqual([]);
        expect(wrapper.state('feedback')).toEqual('Make your guess!');
        expect(wrapper.state('auralStatus')).toEqual('');
        expect(wrapper.state('correctAnswer')).toBeGreaterThanOrEqual(0);
    });

   
});