import React from 'react';
import { Table } from 'reactstrap';

export default function ProductTable(props) {

    const productsTable = props.products.map( (prod, i) => (
        <tr key={i}>
            <td className={!prod.stocked ? "notAvailable" : undefined}>{prod.name}</td>
            <td>{prod.price}</td>
        </tr>
    ))
    
  return (
    <Table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Price</th>
            </tr>
        </thead>
        <tbody>
            {productsTable}
        </tbody>
    </Table>
  );
}
