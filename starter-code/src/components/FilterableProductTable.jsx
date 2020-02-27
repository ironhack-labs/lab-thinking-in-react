import React, {Component} from 'react'
import Product from './Product'

class FilterableProductTable extends Component{
   
    render(){
        const showTable=  (listProducts)=>{
            var arr = [];
            let arrProducts= []
                Object.keys(listProducts).forEach(function(key) {
                arr.push(listProducts[key]);
                });
                
                arr[0].map( (product, index) =>{
                    console.log(product,index)
                      arrProducts.push(<Product  key = {"product-"+index} name={product.name} price={product.price}/>)
                    
                })
                return arrProducts
              
        }
        return(
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
             

                {
                 //console.log(typeof(...this.props.products))
                 showTable(this.props.products)  
                }
               
                </tbody> 
            </table>
        )
    }
}

export default FilterableProductTable