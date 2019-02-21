import React from 'react';
import { Table } from 'reactstrap';

const ProductTable = (props) => {
  return(
    <Table>
      <thead>
        <tr>
          <th>{props.th1}</th>
          <th>{props.th2}</th>
        </tr>
      </thead>
      <tbody>
        {props.tableRows}
      </tbody>
    </Table>
  )
};

export default ProductTable;