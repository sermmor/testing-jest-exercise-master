import * as React from 'react';
import { Header } from './header';
import { shallow } from 'enzyme';

describe('pages/members/list/components/header test', () => {
    it('should be a valid header rendered', () => {
        const props = {};

        const component = shallow(<Header/>);

        expect(component.childAt(0).childAt(0).contains('Avatar')).toBeTruthy();
        expect(component.childAt(0).childAt(1).contains('Id')).toBeTruthy();
        expect(component.childAt(0).childAt(2).contains('Name')).toBeTruthy();
        
        expect(component).toMatchSnapshot();
    });
});
