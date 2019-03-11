import * as React from 'react';
import { Row } from './row';
import { Member } from '../viewModel';
import { shallow } from 'enzyme';

describe('pages/members/list/components/row test', () => {
    it('should be a valid row rendered', () => {
        const membersEntry : Member = {
            id: 1,
            name: 'test field login',
            avatarUrl: 'http://testavatar.png'
        };

        const component = shallow(<Row member={membersEntry}/>);

        expect(component).toMatchSnapshot();
    });
});
