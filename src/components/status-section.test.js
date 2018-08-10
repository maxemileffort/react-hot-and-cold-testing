import React from 'react';
import {shallow, mount} from 'enzyme';

import StatusSection from './status-section';

describe('<StatusSection />', () => {
    it('Renders without crashing', () => {
        let guesses = [1,2,5]
        shallow(<StatusSection guesses={guesses}/>);
    });

    
});