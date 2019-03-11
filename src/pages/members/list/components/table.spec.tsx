import * as React from 'react';
import { Table } from './table';
import { Member } from '../viewModel';
import { shallow } from 'enzyme';

describe('pages/members/list/components/table test', () => {
    it('should be a valid table rendered', () => {
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

        const component = shallow(<Table members={membersEntry}/>);

        expect(component).toMatchSnapshot();

    });
});