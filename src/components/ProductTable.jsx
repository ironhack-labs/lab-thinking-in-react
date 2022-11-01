import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ProductRow from './ProductRow';

function ProductTable({ jsonData }) {
  return (
    <TableContainer component={Paper}>
      <Table size="small">
        <TableHead>
          <TableRow hover>
            {/* <TableCell onClick={sortByName}> */}
            <TableCell style={{ cursor: 'pointer' }}>
              <h2>Name &#8639;&#8642;</h2>
            </TableCell>
            {/* <TableCell onClick={sortByPopularity}> */}
            <TableCell style={{ cursor: 'pointer' }}>
              <h2>Price &#8639;&#8642;</h2>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {jsonData.map((product) => (
            <ProductRow
              key={product.id}
              name={product.name}
              price={product.price}
              inStock={product.inStock}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
export default ProductTable;
