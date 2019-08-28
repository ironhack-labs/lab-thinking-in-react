import React, {useState,useContext, useEffect} from 'react';
import {LeContexte} from './dataContext';
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox, { CheckboxProps } from "@material-ui/core/Checkbox";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexWrap: "wrap"
    },
    margin: {
      margin: theme.spacing(1)
    },
    textField: {
      flexBasis: 200
    }
  })
);

const SearchBoxComponent = () =>{
    const classes = useStyles();
    const [searchText, setSearchText] = useState("");
    const [inStock, setInStock] = useState(false);
    const [losdatos, setlosDatos] = useContext(LeContexte);

    const filtrarArticulos = (e) => {
        setSearchText(e.target.value)
        let datosActualizados = losdatos;
        datosActualizados.filteredData = datosActualizados.data.filter(function(query)
            {return query.name.toLowerCase().search(e.target.value.toLowerCase()) !== -1});
        setlosDatos({...datosActualizados})
        console.log(losdatos)
    };

    const filtrarInStock = (e) => {
        setInStock( !inStock )
        let enEstok = e.target.checked
        console.log(enEstok)
        let datosActualizados = losdatos;
        datosActualizados.filteredData = datosActualizados.data.filter(function(query)
            {return enEstok ? query.stocked : true});
        setlosDatos({...datosActualizados})
        console.log(losdatos)
    };


    return (
      <div>
        <FormControl fullWidth className={classes.margin}>
          <InputLabel htmlFor="adornment-amount">Search</InputLabel>
          <Input
            type="text"
            name="busqueda"
            value={searchText}
            onChange={e => filtrarArticulos(e)}
          />
        </FormControl>
        <FormControlLabel
          control={
            <Checkbox
              type="checkbox"
              name="chkOnStock"
              value={inStock}
              onChange={e => filtrarInStock(e)}
            />
          }
          label="Only show products on stock"
        />
       
      </div>
    );       
}

export default SearchBoxComponent;