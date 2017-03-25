import store from 'Store';
import { MarkerNameField } from 'Components';

describe('Marker name field', () => {
    const TestMarkerNameFieldShallow = shallow(
        <MarkerNameField
            store={store}
            x={100}
            y={99}
        />
        ),
        TestMarkerNameField = mount(
            <MarkerNameField
                store={store}
                x={100}
                y={99}
            />
        );

    it('Rendered', () => {
        expect(TestMarkerNameFieldShallow).toMatchSnapshot();
    });

    it('Has a title', () => {
        expect(TestMarkerNameField.find('h3').length).toBe(1);
    });

    it('Has an input', () => {
        expect(TestMarkerNameField.find('input').length).toBe(1);
    });
});
