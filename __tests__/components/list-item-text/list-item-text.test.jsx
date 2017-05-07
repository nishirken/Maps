import { Map } from 'immutable';
import { ListItemText } from 'Components';

describe('Text in a marks list item', () => {
    const coords = Map({
        lat: 299,
        lng: 300,
    });
    const TestListItemText = shallow(
        <ListItemText
            markerCoords={coords}
        />
    );

    it('Rendered', () => {
        expect(TestListItemText).toMatchSnapshot();
    });
});
