import ProductRow from './ProductRow';

function ProductTable({ props }) {

    return (
        <div>
            {
                props.map((product => {
                    return (
                        <div key={product.id}>
                            <ProductRow product={product} />
                        </div>
                    )
                }))
            }
        </div>
    )
}


export default ProductTable