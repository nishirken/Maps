import { sendReducerPayload } from 'Middlewares';
import { apiUrl, sendPath } from 'Constants';
import { checkEnvironment } from 'Middlewares/send-reducer-payload';
import { Map } from 'immutable';
import request from 'request-promise-native';

describe('Send reducer payload middleware', () => {
    const action = {
        type: 'TEST',
        payload: Map({
            index: 1,
            sendToApi: true,
        }),
    };

    const mockFetch = status => nock(apiUrl).post(sendPath).reply(status);
    const next = jest.fn();

    it('Should return next', () => {
        mockFetch(200);
        expect(sendReducerPayload()(next)(action)).toBe(next(action));
    });

    it('Should return next with error response from server', () => {
        mockFetch(400);
        expect(sendReducerPayload()(next)(action)).toBe(next(action));
    });

    test('Check environment function', () => {
        global.window = {};
        expect(checkEnvironment(action)).toBeTruthy();
        expect(checkEnvironment({})).toBe();
    });

    it('Should send an correct body', () => {
        global.fetch = jest.fn((url, options) => Promise.resolve(options.body));
        sendReducerPayload()(next)(action);
        expect(JSON.parse(fetch.mock.calls[0][1].body)).toEqual({
            type: action.type,
            payload: {
                index: 1,
            },
        });
    });
});
