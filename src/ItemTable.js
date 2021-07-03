import React, {Fragment} from 'react';
import ItemRow from './ItemRow';
import TableHeader from './TableHeader';
import styled from 'styled-components';

const StyledArticle = styled.article`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  padding: 1rem;
  margin-top: 1rem;
`;

const StyledTableWrapper = styled.div`
    border: 1px solid rgba(0, 0, 0, 0.3);
    overflow: auto;
    width: 60%;
`;

const StyledTable = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

const ItemTable = ({ itemsList, searchedItemsList, inStock }) => {
  return (
    <StyledArticle className="ItemTable">
        <StyledTableWrapper className="ItemTable__wrapper">
            <StyledTable>
                <thead>
                <TableHeader>
                    <Fragment>Name</Fragment>
                    <Fragment>Price</Fragment>
                </TableHeader>
                </thead>
                <tbody>
                {!inStock && searchedItemsList.length >= 1
                    ? searchedItemsList.map((item) => (
                        <ItemRow
                        key={item.id}
                        name={item.name}
                        price={item.price}
                        ></ItemRow>
                    ))
                    : inStock && searchedItemsList.length >= 1 ?
                    searchedItemsList.filter(item => item.stocked === true).map((item) => (
                        <ItemRow
                        key={item.id}
                        name={item.name}
                        price={item.price}
                        ></ItemRow>
                    ))
                    : itemsList &&
                    itemsList.map((item) => (
                        <ItemRow
                        key={item.id}
                        name={item.name}
                        price={item.price}
                        ></ItemRow>
                    ))}
                </tbody>
            </StyledTable>
        </StyledTableWrapper>
    </StyledArticle>
  );
};
 
export default ItemTable;