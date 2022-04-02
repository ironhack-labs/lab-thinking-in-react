import React, { Component } from 'react';
import { Tr, Td, Center } from '@chakra-ui/react';

class ProductsRow extends Component {
  render() {
    return (
      <Tr>
        {this.props.data.inStock ? (
          <Td>
            <Center> {this.props.data.name} </Center>
          </Td>
        ) : (
          <Td color="red">
            <Center> {this.props.data.name} </Center>
          </Td>
        )}
        <Td>
          <Center>{this.props.data.price} </Center>
        </Td>
      </Tr>
    );
  }
}

export default ProductsRow;
