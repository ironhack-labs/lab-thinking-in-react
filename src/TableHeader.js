import React, {Fragment} from 'react';
import styled from 'styled-components';

const StyledTableHeader = styled.th`
  /* Background color */
  background-color: #ddd;

  /* Stick to the top */
  position: sticky;
  top: 0;

  /* Displayed on top of other rows when scrolling */
  z-index: 9999;
  padding: 0.5rem;
  font-size: 1.25rem;
  letter-spacing: 1px;
  font-weight: lighter;
`;
const TableHeader = (props) => {
    return ( 
        <Fragment>
            {props.children.length >= 1 ? props.children.map(child => 
                <StyledTableHeader>
                {child}
                </StyledTableHeader>
            )
            : 
            <StyledTableHeader>
                props.children[0]
            </StyledTableHeader>
            }
        </Fragment>
        
     );
}
 
export default TableHeader;