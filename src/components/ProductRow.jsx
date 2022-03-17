import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

function ProductRow(props) {
  const { name, price, inStock } = props.products;

  return (
    <TableRow>
      <TableCell align="center" style={{ color: inStock || 'red' }}>
        {name}
      </TableCell>
      <TableCell align="center">{price}</TableCell>
    </TableRow>
  );
}

export default ProductRow;
