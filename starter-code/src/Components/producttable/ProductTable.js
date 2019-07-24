import React from 'react';
import '../../App.css';
import ProductRow from '../../Components/productrow/ProductRow'

function ProductTable(props) {
  
    return (
      <div className="App">
        <div>
      <table className="table-prod">
        <tbody>
        <tr className="head">
        <th>Name</th>
        <th>Price</th>
        </tr>
        {props.products.map((e,i)=><ProductRow key={i} theProduct={e}/>)}
        </tbody>
      </table>
      </div>
      </div>
    );
  }


export default ProductTable;
