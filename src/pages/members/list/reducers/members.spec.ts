import deepFreeze from 'deep-freeze';
import { actionIds } from '../actions/actionIds';
import { membersReducer, MembersState } from './members';

describe('members/list/reducers tests', () => {
    describe('membersReducer method of members.ts file', () => {
        it('should return updated state when its entry is an UPDATE_MEMBER action', () => {
            const state: MembersState = [
                {
                    id: 1,
                    login: 'test field login',
                    avatar_url: 'http://testavatar.png'
                },
                { 
                    id: 3,
                    login: 'test field login (2)',
                    avatar_url: 'http://testavatar(2).png'
                },
            ];

            const payload = [
                {
                    id: 2,
                    login: 'test field login (1)',
                    avatar_url: 'http://testavatar(1).png'
                },
                { 
                    id: 4,
                    login: 'test field login (4)',
                    avatar_url: 'http://testavatar(4).png'
                },
            ];

            const action = {
                type: actionIds.UPDATE_MEMBERS,
                payload,
            };

            deepFreeze(state);

            const nextState = membersReducer(state, action);

            expect(nextState).toEqual(payload);
        });

        it('should return a null state', () => {
            const state = null;
            const action = { type: 'not recognized action type' };
            
            const nextState = membersReducer(state, action);
            
            expect(nextState).toEqual(null);
        });
    });
});