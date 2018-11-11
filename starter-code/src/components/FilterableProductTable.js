import React from 'react';
//import ProductRow from './ProductRow';
import ProductTable from './ProductTable'
import SearchBar from './SearchBar'

const filterableProductTable = (props) => {

    function sendChangeToApp(e) {
        props.onChangeData(e)
      }
function sendCheckToApp(e) {
        props.onChangeCheck(e)
    }


    return (
        <div>
            <SearchBar onFilterItems={e => sendChangeToApp(e)} onStockItems={e => sendCheckToApp(e)} />
            <ProductTable data={props}/>
        </div>
    )

}

export default filterableProductTable;