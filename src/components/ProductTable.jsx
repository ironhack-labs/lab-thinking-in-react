import ProductRow from "./ProductRow";


function ProductTable (props) {
    const { products } = props;
    console.log(products)
   
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                
                {products.map ((product) => (
                <ProductRow key={product.id} name={product.name} price={product.price}/>
                ))}

            </table>

        </div>
    )
}

export default ProductTable;