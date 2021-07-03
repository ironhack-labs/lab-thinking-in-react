import React from 'react';
import styled from 'styled-components';

const StyledTr = styled.tr`
  border-top: 1px solid rgba(0, 0, 0, 0.3);
`;

const StyledTd = styled.td`
  padding: 1rem;
`;

const ItemRow = ({name, price}) => {
    return ( 
        <StyledTr>
            <StyledTd>{name}</StyledTd>
            <StyledTd>{price}</StyledTd>
        </StyledTr>
     );
}
 
export default ItemRow;