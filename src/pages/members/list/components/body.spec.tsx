import * as React from 'react';
import { Body } from './body';
import { Member } from '../viewModel';
import { shallow } from 'enzyme';

describe('pages/members/list/components/body test', () => {
    it('should be a valid body rendered', () => {
        const membersEntry : Member[] = [
            {
                id: 1,
                name: 'test field login',
                avatarUrl: 'http://testavatar.png'
            },
            {
                id: 2,
                name: 'test field login (1)',
                avatarUrl: 'http://testavatar(1).png',
            },
            {
                id: 3,
                name: 'test field login (2)',
                avatarUrl: 'http://testavatar(2).png',
            },
        ];

        const component = shallow(<Body members={membersEntry}/>);

        expect(component).toMatchSnapshot();
    });
});
