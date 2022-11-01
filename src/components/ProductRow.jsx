import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

function ProductRow({ name, price, inStock }) {
  return (
    <TableRow hover>
      <TableCell>
        {inStock ? <p>{name}</p> : <p className="red">{name}</p>}
      </TableCell>
      <TableCell>
        <p>{price}</p>
      </TableCell>
    </TableRow>
  );
}
export default ProductRow;
