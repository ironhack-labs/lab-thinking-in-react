import Table from '@mui/material/Table';

import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import Paper from '@mui/material/Paper';
import ProductRow from './ProductRow';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

function ProductTable(props) {
  return (
    <TableContainer component={Paper}>
      <Table size="small">
        <TableHead style={{ backgroundColor: 'lightgrey' }}>
          <TableRow>
            <TableCell align="center">name</TableCell>
            <TableCell align="center">price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.list.map((element) => (
            <ProductRow products={element} key={element.name} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default ProductTable;
