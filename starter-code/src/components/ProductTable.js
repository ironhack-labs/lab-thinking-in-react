import React from "react";
import ProductRow from "./ProductRow";


export default class ProductTable extends React.Component{


    render(){

        return(

            <div className="product-table">
            <table>
           <tr>
             <td>Name</td>  
             <td>Price</td>   
           </tr>
          
               
               {this.props.newList.map(product =>(
                <ProductRow name={product.name} category={product.category} stocked={product.stocked} price={product.price}>
                
                </ProductRow>
               ))}
               
           </table>
                
            </div>
        )
    }
}