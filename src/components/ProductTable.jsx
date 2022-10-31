import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ProductRow from './ProductRow';

function ProductTable() {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow hover>
            {/* <TableCell style={{ cursor: 'pointer' }} onClick={sortByName}> */}
            <TableCell>
              Name <span color="error">&#8639;&#8642;</span>
            </TableCell>
            {/* <TableCell style={{ cursor: 'pointer' }} onClick={sortByPopularity}> */}
            <TableCell>
              <span>Price &#8639;&#8642;</span>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <ProductRow />
        </TableBody>
      </Table>
    </TableContainer>
  );
}
export default ProductTable;
