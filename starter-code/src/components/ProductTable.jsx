import React, {Component} from 'react'
import ProductRow from './ProductRow'

class ProductTable extends Component{
    constructor(props){
        super(props)
        this.state={
            listProducts :[]
        }
    }
     showTable=  (listProducts)=>{
        var arr = [];
        let arrProducts= []
            Object.keys(listProducts).forEach(function(key) {
            arr.push(listProducts[key]);
            });
            
            arr[0].map( (product, index) =>{
                console.log(product,index)
                  arrProducts.push()
                
            })
            return arrProducts
          
    }
    filterTable = (strToFilter)=>{
        this.state.listProducts.filter((products) =>{
            if(strToFilter.length === 1){
                return(products.startsWith(strToFilter))
            }else{
                return(products.includes(strToFilter))
            }
            
        })
    }
    
    render(){
        
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
                //  this.showTable(this.props.products)
                this.props.products.data.map((product,i) => {
                    return(<ProductRow  key = {"product-"+i} name={product.name} price={product.price}/>)
                })
                }
               
                </tbody> 
            </table>
        )
    }
}

export default ProductTable