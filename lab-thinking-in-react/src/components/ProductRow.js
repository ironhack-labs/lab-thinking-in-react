import React, {Component} from 'react'
import products from './../data.json'
class ProductRow extends Component {

    constructor() {
        super()
        this.state = {
            products: products
           
        }
    }

    

    render() {

        return (
            <>
                {products.data.map((elm, idx) => 
                    <tr key={idx}>
                      <td>{elm.name}</td>
                        <td>{elm.price}</td>
     
                    </tr>
    
              )}  
            
            </>
            
        )
    }
}

export default ProductRow