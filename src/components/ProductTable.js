import ProductRow from "./ProductRow"

const ProductTable = (props) => {
    const { products } = props
  return (
    <div>

        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>

            <tbody>
                 { products.map((product) => {
                    return <ProductRow
                        key={product.id}
                        price={product.price}  
                        name={product.name} 
                        />
                 })}
            </tbody>
        </table>
        

    </div>
  )
}

export default ProductTable