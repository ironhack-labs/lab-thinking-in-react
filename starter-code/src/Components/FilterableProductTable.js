import React from 'react';
import SearchBoxComponent from './SearchBoxComponent';
import DataTable from './DataTable';
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    backgroundColor: "#5e5e5e",
    color: "#D83E65"
  }
}));
const filterableproducttable = () =>{
  const classes = useStyles();
  return (
    <div>
      <Paper className={classes.root}>
        <Typography variant="h3" component="h2">
          IronStore
        </Typography>
      </Paper>
    
      <div>
        <SearchBoxComponent />
        <DataTable />
      </div>
    </div>
  );
}

export default filterableproducttable;