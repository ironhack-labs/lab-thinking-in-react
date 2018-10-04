import React from 'react';
import 'bulma/css/bulma.css';
import { ProductCategoryRow } from './ProductCategoryRow';
import { ProductRow } from './ProductRow';
import data from '../data.json';

export class ProductTable extends React.Component {

  constructor(){
    super();
    this.state = {
      data:data.data
    };
  }
   render(){
     return (
       <div>
         <table>
           <thead>
             <tr>
             <td>Name</td>
             <td>Price</td>
             </tr>
           </thead>
           <tbody>
             {
               this.state.data.map((e, i) => {
               return (
                 <ProductCategoryRow key={i} category={e.category}/>
               )
             })}
               <ProductRow/>
           </tbody>
         </table>
      </div>
     )
   }

}