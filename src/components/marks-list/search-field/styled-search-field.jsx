import styled from 'styled-components';

const StyledSearchField = styled.input`
    padding: 2px ${StyleFunc.em(10)};
    border: solid ${StyleConst.colors.secondary};
    border-width: 1px 0;
    font-size: ${StyleFunc.em(18)};
    text-align: center;
    
    &::-webkit-input-placeholder {
        font-family: ${StyleConst.fontFamily.primary};
    }
`;

export default StyledSearchField;
