import React from "react";
import styled from "@emotion/styled";

export const StyledRow = styled.tr`
  &.stocked {
    color: red;
  }
`;

export const ProductRow = ({ rowCat, prodData }) => {
  return (
    <React.Fragment>
      {prodData
        .filter(prod => prod.category === rowCat)
        .map(prod =>
          prod.stocked ? (
            <StyledRow key={prod.name}>
              <td>{prod.name}</td>
              <td>{prod.price}</td>
              <td>
                <i className="fas fa-check-circle" />
              </td>
            </StyledRow>
          ) : (
            <StyledRow key={prod.name} className="stocked">
              <td>{prod.name}</td>
              <td>{prod.price}</td>
              <td>
                <i className="fas fa-exclamation-circle" />
              </td>
            </StyledRow>
          )
        )}
    </React.Fragment>
  );
};
