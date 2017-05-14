import { Map } from 'immutable';
import { setObject } from 'Actions';
import { OBJECTS } from 'Constants';

describe('Set object action', () => {
    it('Should create an object for list item', () => {
        const payload = Map({
            markerIndex: 1,
            object: Map({
                index: 0,
                name: 'Objects',
            }),
            sendToApi: true,
        });

        const expectedValue = {
            type: OBJECTS,
            payload,
        };

        expect(setObject(
            payload.get('markerIndex'),
            payload.get('object').get('index'),
            payload.get('object').get('name')
        ))
            .toEqual(expectedValue);
    });
});
