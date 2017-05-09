import { serverStoreDispatch } from '../../src/server/handlers';
import { testServerInitialState, testStore } from 'Store';

describe('Creation server store', () => {
    const spy = jest.spyOn(testStore, 'dispatch');

    beforeEach(() => {
        nock('http://nginx').post('/get-state')
            .reply(200, testServerInitialState);
    });

    it('Should dispatch all actions', () => {
        const stateSize = testServerInitialState.size;
        const markerSize = testServerInitialState.get(0).size;
        const objectsSize = testServerInitialState.get(0).get('objects').size;

        serverStoreDispatch(testServerInitialState, testStore);
        expect(spy.mock.calls.length)
            .toBe(stateSize * (markerSize - 1 + objectsSize));
    });
});

