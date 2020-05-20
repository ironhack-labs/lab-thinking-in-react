import React from 'react';
import Row from '../ProductRow/ProductRow'
import './ProductTable.css';

function ProductTable ({products}) {
    const rows = products.map((el,idx) =>{
        return (<Row name={el.name}  price={el.price} key={idx}/>)
    })

  return (
    <div className='div-table'>
        <table className='table'>
        <tbody>
            <tr>
                <th>Name</th>
                <th>Price</th>
            </tr>
            {rows}
        </tbody>
        </table>    
    </div>
  );
}

export default ProductTable ;
