import React, {Component} from 'react'

import ProductRow from './ProductRow'


class ProductTable extends Component  {
    constructor(props) {
        super(props)
        this.state = {
      
     }
  }
    
    

 render(){
    console.log(this.props)
    return (
        <>
            <h1>hola</h1>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>              
                </thead>
                <tbody>
                    {/* {this.props.products.products.data.map(elem => <ProductRow key={elem.id} product ={elem}/>)} */}
                </tbody>
            </table>
            {/* {products.map(elem => key= elem.id<ProductRow/> */}
            

        </>)
 }

    


}


export default ProductTable