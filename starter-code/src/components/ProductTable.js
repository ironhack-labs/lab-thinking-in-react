import React from 'react';
import ProductRow from './ProductRow';


const ProductTable = (props) => {
  // console.log(props)
  console.log(props)

  return(
   
    <article className="products-container">

            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Price</th>      
                </tr>
              </thead>

              <tbody>
                {
                    props.products.map((product, index) => {
                      return <ProductRow 
                                key={index} 
                                {...product} 
                                />
                    }) 
                  }
              
              </tbody>
            </table>

          </article>
  )

}

export default ProductTable