import store from 'Store';
import MarksListItem from 'Components/marks-list/marks-list-item/marks-list-item';

describe('Marks list item', () => {
    const TestMarksLIstItemShallow = shallow(<MarksListItem store={store} />),
        TestMarksListItem = mount(
            <MarksListItem
                markerCoords={{
                    lat: 299,
                    lng: 300,
                }}
                store={store}
            />
        );

    it('Rendered', () => {
        expect(TestMarksLIstItemShallow).toMatchSnapshot();
    });

    it('Has a buttons block', () => {
        expect(TestMarksListItem.find('Buttons').length).toBe(1);
    });

    it('Has a text block', () => {
        expect(TestMarksListItem.find('Text').length).toBe(1);
    });
});
