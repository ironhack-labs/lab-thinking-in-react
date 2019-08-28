import React from 'react';
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";

const Row = props => (
  <TableRow>
    <TableCell>{props.name}</TableCell>
    <TableCell align="right">{props.price}</TableCell>
  </TableRow>
);

export default Row;