import { fromJS, Map, List } from 'immutable';
import { fetchFromApi } from '../../src/server/handlers';
import { testInitialState } from 'Store';

describe('fetchFromApi function', () => {
    it('Should return immutable Map, when response code is 200', () => {
        nock('http://nginx').post('/get-state')
            .reply(200, testInitialState);

        fetchFromApi()
            .then(result => {
                expect(result).toBe(fromJS(JSON.parse(testInitialState)));
                expect(result).toBe(Map.isMap());
            });
    });

    it('Should return an empty list, when response has an error', () => {
        nock('http://nginx').post('/get-state')
            .reply(400, { message: 'some server error' });

        fetchFromApi()
            .then(result => {
                expect(result).toBe(List([]));
            });
    });
});

