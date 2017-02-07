import StyledMarkerSvg from './styled-marker-svg';

export default class Marker extends PureComponent {
    render() {
        return (
            <StyledMarkerSvg viewBox="0 0 32 32">
                <path
                    d="M17 0l-3 3 3 3-7 8h-7l5.5 5.5-8.5 11.269v1.231h1.231l11.269-8.5
                        5.5 5.5v-7l8-7 3 3 3-3-15-15zM14 17l-2-2 7-7 2 2-7 7z"
                />
            </StyledMarkerSvg>
        );
    }
}
