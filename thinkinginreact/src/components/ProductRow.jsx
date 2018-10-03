import React from 'react'

const ProductRow = ({info}) => {
    console.log(info)
    return (
        <div>
            <table>
                <thead>
                    <th>Name</th>
                    <th>Price</th>
                </thead>

                <h4>Electronics</h4>
               
                {info.map((product, i) => (
                        
                <tbody>
                    
                    {product.category === 'Electronics' ?  <tr>
                        <td>{product.name}</td>
                        <td>{product.price}</td>
                    </tr> : null}
                                      
                </tbody>
                
                ))}
                     <h4>Sporting Goods</h4>
                {info.map((product, i) => (
                        
                        <tbody>
                            
                            {product.category === 'Sporting Goods' ?  <tr>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                            </tr> : null}
                                              
                        </tbody>
                        
                        ))}
                
            </table>
        </div>
    )
}

export default ProductRow






