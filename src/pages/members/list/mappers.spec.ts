import * as model from '../../../rest-api/model';
import * as vm from './viewModel';
import { mapMemberListModelToVM } from './mappers';

describe('pages/members/list/mappers tests', () => {
    describe('mapMemberListModelToVM method', () => {
        it('parse array with some model.Member to vm.Member', () => {
            const entryAllMembers : model.Member[] = [
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
                {
                    id: 3,
                    login: 'test field login (2)',
                    avatar_url: 'http://testavatar(2).png',
                },
            ];

            const expectedMembers : vm.Member[] = [
                {
                    id: 1,
                    name: 'test field login',
                    avatarUrl: 'http://testavatar.png',
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

            const membersReturned : vm.Member[] = mapMemberListModelToVM(entryAllMembers);
            
            expect(membersReturned).toEqual(expectedMembers);
        });

        it('parse empty array to vm.Member', () => {
            const entryAllMembers : model.Member[] = [];

            const expectedMembers : vm.Member[] = [];

            const membersReturned : vm.Member[] = mapMemberListModelToVM(entryAllMembers);
            
            expect(membersReturned).toEqual(expectedMembers);
            
        });

        it('parse null to vm.Member', () => {
            const entryAllMembers : model.Member[] = null;

            const expectedMembers : vm.Member[] = [];

            const membersReturned : vm.Member[] = mapMemberListModelToVM(entryAllMembers);
            
            expect(membersReturned).toEqual(expectedMembers);
            
        });
    });
});
