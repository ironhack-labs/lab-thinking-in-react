import React from 'react'
import ProductRow from './ProductRow'

const myStyle = {
    display: 'flex',
    flexDirection: 'column',
    padding: '1rem',
    backgroundColor: 'pink'
}

const ProductTable = (props) => {
    // console.log(props)
  return (
    <div style={myStyle}>
        <table>
            <tr>
                <th>&nbsp;</th>
                <th>Name</th>
                <th>Price</th>
            </tr>
            {
                props.products.map((article, pos) => {
                    return (
                        <ProductRow {...article} key={article.id}/>
                    )
                })
            }
            <ProductRow />
        </table>
    </div>
  )
}

export default ProductTable