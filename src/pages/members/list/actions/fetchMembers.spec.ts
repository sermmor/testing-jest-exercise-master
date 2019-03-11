import configureStore from 'redux-mock-store';
import reduxThunk from 'redux-thunk';
import * as apiMember from '../../../../rest-api/api/member';
import { Member } from '../../../../rest-api/model';
import { actionIds } from './actionIds';
import { fetchMembers } from './fetchMembers';

const getMockStore = configureStore([reduxThunk]);

describe('pages/members/list/actions tests', () => {
    describe('fetchMembers method of fetchMembers.ts file', () => {
        it('finished successfully when fetch excecuted', async () => {
            const resultAllMembers: Member[] = [
                {
                  id: 1,
                  login: 'test field login',
                  avatar_url: 'http://testavatar.png',
                },
            ];

            const memberStubReturned = jest.spyOn(apiMember, 'fetchMembers').mockResolvedValue(resultAllMembers);

            const store = getMockStore();
            const dispatchResult = await store.dispatch<any>(fetchMembers());
            
            const action = store.getActions()[0];
            expect(memberStubReturned).toHaveBeenCalled();
            expect(action.type).toEqual(actionIds.UPDATE_MEMBERS);
            expect(action.payload).toEqual(resultAllMembers);
        });

        it('call console.log when fetch fail', async () => {
            const logTestError = 'error to log';
            const memberStubReturned = jest.spyOn(apiMember, 'fetchMembers').mockRejectedValue(logTestError);
            const loggerStub = jest.spyOn(window.console, 'log');
        
            const store = getMockStore();
            const dispatchResult = await store.dispatch<any>(fetchMembers());
            
            expect(loggerStub).toHaveBeenCalledWith(logTestError);
        });
    });
});