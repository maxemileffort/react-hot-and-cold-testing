import React from 'react';
import {shallow, mount} from 'enzyme';

import GuessCount from './guess-count';

describe('<GuessCount />', () => {
    it('Renders without crashing', () => {
        shallow(<GuessCount />);
    });

    it('Renders the correct guess count', () => {
        const num = 5;
        const wrapper = shallow(<GuessCount guessCount={num} />);
        expect(wrapper.text()).toEqual(`You've made ${num} guesses!`);
      });

    it('Renders the correct guess noun', () => {
        const num = 1;
        const wrapper = shallow(<GuessCount guessCount={num} />);
        expect(wrapper.text()).toEqual(`You've made ${num} guess!`);
      });
});