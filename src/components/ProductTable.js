import ProductRow from "./ProductRow"

const ProductTable = (props) => {
    const { products } = props
  return (
    <div>
        <thead>
            <tr>
                <th>Name</th>
                <th>Price</th>
            </tr>
        </thead>

        <tbody>
            <ProductRow 
                products={products}
            />
        </tbody>
        

    </div>
  )
}

export default ProductTable