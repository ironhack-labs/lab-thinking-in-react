import ProductRow from "./ProductRow";

const ProductTable = (props) => {

    

    return(
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Product Price</th>
                    </tr>
                </thead>
                <tbody>
         { props.products.map((singlePrdct => {
            return <ProductRow 
            price = {singlePrdct.price}
            name = {singlePrdct.name}
            inStock = {singlePrdct.inStock}
            />
         }))}
                </tbody>
            </table>
        </div>
    )
}

export default ProductTable;