import React, {useState, useContext} from 'react';
import {LeContexte} from './dataContext';
import Row from './Row';

const DataTable = () => {
    const [losdatos, setlosDatos] = useContext(LeContexte); 
    //const [datosFiltrados, setdatosFiltrados] = useState(losdatos.filteredData)
    //console.log(losdatos)
  return (
<div>
    
    
    <table>
      <thead>
        <tr>
          <th>Name </th>
          <th>Price</th>
        </tr>
      </thead>
    
      <tbody>

            {losdatos.filteredData.map( (dato, i) => {
              return <Row key={ i }
              name={dato.name} 
              price={dato.price}/>
            })}
            
      </tbody>
    </table>
</div>
  )
};

export default DataTable;


