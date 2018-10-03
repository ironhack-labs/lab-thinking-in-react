import React from 'react';
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';


export const  ProductTable = (props) => {

   
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
        <ProductCategoryRow products={props}/>
    {/* {props.products.map((e) => {
        if(e.category === "Sporting Goods")
         {return <ProductRow key={e.name} {...e}/>}

          if(e.category === "Electronics")
         {return <ProductRow key={e.name} {...e}/>}
    })}  */}
        }



    
        </tbody>
      </table>
    );
  }




export default ProductTable;
