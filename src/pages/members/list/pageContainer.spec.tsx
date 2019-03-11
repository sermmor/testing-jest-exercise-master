import * as React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import { MemberListPageContainer } from './pageContainer';

const getMockStore = configureStore();

describe('pages/members/list/pageContainer tests', () => {
    it('should be a valid pageContainer rendered', () => {
        const state = {
            members: [
                {
                    id: 1,
                    login: 'test field login',
                    avatar_url: 'http://testavatar.png',
                },
                {
                    id: 2,
                    login: 'test field login (1)',
                    avatar_url: 'http://testavatar(1).png',
                },
            ],
        };
    
        const store = getMockStore(state);
    
        const componentResult = shallow(<MemberListPageContainer />, { context: { store }, } );
        
        expect(componentResult).toMatchSnapshot();
    });
});