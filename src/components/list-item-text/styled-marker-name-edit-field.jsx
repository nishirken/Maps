import styled from 'styled-components';

const StyledMarkerNameEditField = styled.input`
    max-width: ${StyleFunc.em(140)};
    padding: ${StyleFunc.em(2.5)} 0; 
    border: solid ${StyleConst.colors.secondary};
    border-width: 1px 0;
    font-family: ${StyleConst.fontFamily.primary};
    font-weight: 700;
    font-size: ${StyleFunc.em(18)};
`;

export default StyledMarkerNameEditField;
