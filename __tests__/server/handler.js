import { handler } from '../../src/server/handlers';

describe('Request handler', () => {
    it('Should work with result from api', () => {
        const markers = [{}, {}];

        nock('http://nginx').post('/get-state').reply(200, markers);
        handler({});
    });

    it('Should work with empty result from api', () => {
        const markers = [];

        nock('http://nginx').post('/get-state').reply(200, markers);
        handler({});
    });

    it('Should work with empty result from api', () => {
        const markers = [];

        nock('http://nginx').post('/get-state').reply(200, markers);
        handler({});
    });

    it('Should work with error result from api', () => {
        nock('http://nginx').post('/get-state').reply(400);
        handler({});
    });
});
