import ProductRow from "./ProductRow";

function ProductTable({products, searchValue, onlyShowInStock}) {
    return <div>
        <table>
            <thead>
                <th>Name</th>
                <th>Price</th>
            </thead>
    
            {products
                .filter((product)=>product.name.toLowerCase().includes(searchValue.toLowerCase()))
                .filter((product)=>onlyShowInStock ? product.inStock : true )
                .map((product)=> <ProductRow product={product}/>)}

        </table>
    </div>
}

export default ProductTable;