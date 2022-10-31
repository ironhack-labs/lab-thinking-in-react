import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

function ProductRow() {
  return (
    <TableRow hover>
      <TableCell>
        <p>Football</p>
      </TableCell>
      {/* <TableCell style={{ cursor: 'pointer' }} onClick={sortByPopularity}> */}
      <TableCell>
        <p>100$</p>
      </TableCell>
    </TableRow>
  );
}
export default ProductRow;
