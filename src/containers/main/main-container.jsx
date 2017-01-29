import { Main } from 'Components';
import { MapContainer } from '../map/map-container';
import { ListsBlockContainer } from '../lists-block/lists-block-container';

export class MainContainer extends PureComponent {
    render() {
        return (
            <Main>
                <MapContainer />
                <ListsBlockContainer />
            </Main>
        );
    }
}
