import React, {useState, useContext} from 'react';
import {LeContexte} from './dataContext';
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import Row from './Row';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      marginTop: theme.spacing(3),
      overflowX: "auto"
    },
    table: {
      minWidth: 700
    }
  })
);


const DataTable = () => {
  const classes = useStyles();
    const [losdatos, setlosDatos] = useContext(LeContexte); 
    //const [datosFiltrados, setdatosFiltrados] = useState(losdatos.filteredData)
    //console.log(losdatos)
  return (
    <div>
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>Product</TableCell>
              <TableCell align="right">Price</TableCell>
            </TableRow>
          </TableHead>
  
          <TableBody>
          {losdatos.filteredData.map((dato, i) => {
            return <Row key={i} name={dato.name} price={dato.price} />
          })}
          </TableBody>
          </Table>
        </Paper>
    </div>
  );
};

export default DataTable;


