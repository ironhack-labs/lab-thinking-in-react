import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import { red } from '@mui/material/colors';

function ProductRow({ name, price, inStock }) {
  return (
    <TableRow
    // hover
    // sx={{
    //   backgroundColor: '',
    //   '&:hover': {
    //     backgroundColor: red,
    //     // opacity: [0.1, 0.4, 0.3],
    //   },
    // }}
    >
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
