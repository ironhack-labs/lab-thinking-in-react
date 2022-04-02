import React, { Component } from 'react';
import ProductsRow from './ProductsRow';
import { Table, Thead, Tbody, Tr, Th, TableContainer, Center } from '@chakra-ui/react';

class ProductsTable extends Component {
  render() {
    let filteredArray = this.props.products.filter((str) => {
      return (
        str.name.toLowerCase().indexOf(this.props.searchText.toLowerCase()) >= 0
      );
    })
    if(this.props.inStock) {
      filteredArray = filteredArray.filter(product => {
        return product.inStock === true
      })
    }
    return (
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
                <Th><Center>Name</Center></Th>
                <Th><Center>Price</Center></Th>
            </Tr>
          </Thead>
          <Tbody>
            {filteredArray.map((product, index) => {
              return <ProductsRow key={index} data={product} />;
            })}
          </Tbody>
        </Table>
      </TableContainer>
    );
  }
}

export default ProductsTable;
