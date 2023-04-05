// child of product table
import { useState } from 'react';


function ProductRow (props) {
    

  return(

      <div>
        <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Price</th>
            </tr>
        </thead>
            {props.products.map((product) => {

                if(product.inStock){
                  return(
                    <tbody key={product.id}>
                        <tr className='inStock'>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                        </tr>
                    </tbody>

                        )
                }else{
                    return(
                    <tbody key={product.id}>
                        <tr className='notInStock'>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                        </tr>
                    </tbody>

                        )
                }



            })}

        </table>
      </div>    
  )
}
export default ProductRow