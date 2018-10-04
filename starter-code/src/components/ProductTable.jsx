import React from 'react'
import '../App.css';
import ProductRow from './ProductRow'
import ProductCategoryRow from './ProductCategoryRow';


class ProductTable extends React.Component {
 constructor(props){
   super(props)
   this.state={}
 }

 render(){
   return(
     <table>
       <tr>
         
       <th>Product</th>
       <th>Price</th>
       </tr>

       <ProductRow/>

     </table>
   )
 }
}

export default ProductTable