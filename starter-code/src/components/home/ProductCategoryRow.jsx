import React from 'react'

const ProductCategoryRow = ({category}) =>{

return(
          <tr>
            <td colspan="2"><strong>{category}</strong></td>
          </tr>
    ) 
}

export default ProductCategoryRow