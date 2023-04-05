// child of product table
import { useState } from 'react';


function ProductRow (props) {
    

  return(

      <div>
        <table className='table'>
        <thead>
            <tr>
                <th scope="col">Name</th>
                <th scope="col">Price</th>
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