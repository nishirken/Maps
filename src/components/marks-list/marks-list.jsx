import { map, filter, forEach, includes } from 'lodash';

import StyledMarksList from './styled-marks-list';
import StyledSearchField from './search-field/styled-search-field';
import MarksListItem from './marks-list-item/marks-list-item';

export default class MarksList extends PureComponent {
    static propTypes = {
        markers: PropTypes.arrayOf(PropTypes.shape({
            payload: PropTypes.shape({
                coords: PropTypes.shape({
                    lat: PropTypes.number,
                    lng: PropTypes.number,
                    x: PropTypes.number,
                    y: PropTypes.number,
                }).isRequired,
                name: PropTypes.string,
            }),
        })).isRequired,
        currentMarkerPayload: PropTypes.shape({
            markerIndex: PropTypes.number,
            coords: PropTypes.objectOf(PropTypes.number),
        }),
        markerChoice: PropTypes.func,
        getMarkerSearchIndexes: PropTypes.func,
        filterMarkers: PropTypes.arrayOf(PropTypes.number),
        deleteMarker: PropTypes.func,
        getDeleteMarkerIndexes: PropTypes.arrayOf(PropTypes.number),
    }

    markerSearchIndex(e) {
        const value = e.target.value;

        const searchIndexes = [];

        function search(searchValue, ...args) {
            for (const argument in args)
                return String(args[argument]).toLowerCase().indexOf(searchValue) !== -1;
        }

        if (value)
            forEach(this.props.markers, (marker, key) => {
                if (search(value, marker.name))
                    searchIndexes.push(key);
            });

        this.props.getMarkerSearchIndexes(searchIndexes);
    }

    marksListItemsRender() {
        let markers = this.props.markers;

        if (this.props.getDeleteMarkerIndexes)
            markers = filter(markers, (marker, key) => !includes(this.props.getDeleteMarkerIndexes, key));

        if (this.props.filterMarkers.length > 0)
            markers = filter(markers, (marker, key) => includes(this.props.filterMarkers, key));

        return map(markers, (marker, key) => {
            let current = false;

            if (this.props.currentMarkerPayload.markerIndex === key) current = true;

            return (
                <MarksListItem
                    current={current}
                    deleteMarker={this.props.deleteMarker}
                    key={key}
                    markerChoice={this.props.markerChoice}
                    markerCoords={{
                        lat: marker.coords.lat,
                        lng: marker.coords.lng,
                    }}
                    markerIndex={marker.index}
                    markerName={marker.name}
                    markerNumber={key + 1}
                />
            );
        });
    }

    render() {
        return (
            <StyledMarksList>
                <StyledSearchField
                    placeholder="search"
                    type="text"
                    onChange={::this.markerSearchIndex}
                />
                {this.marksListItemsRender()}
            </StyledMarksList>
        );
    }
}
