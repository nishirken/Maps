import { serverStoreDispatch } from '../../src/server/handlers';
import { testServerInitialState, testStore } from 'Store';

describe('Creation server store', () => {
    const spy = jest.spyOn(testStore, 'dispatch');

    beforeEach(() => {
        nock('http://nginx').post('/get-state')
            .reply(200, testServerInitialState);
    });

    it('Should dispatch index', () => {
        serverStoreDispatch(testServerInitialState, testStore);
    });
});

