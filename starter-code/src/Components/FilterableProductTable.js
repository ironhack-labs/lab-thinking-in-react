import React, {useContext} from 'react';
import SearchBoxComponent from './SearchBoxComponent';
import DataTable from './DataTable';




const filterableproducttable = () =>{

  return (
    <div>
      <h3>IronStore</h3>
      <div> 
        <SearchBoxComponent/>
        <DataTable/>
      </div>
    </div>
  
  )
}

export default filterableproducttable;