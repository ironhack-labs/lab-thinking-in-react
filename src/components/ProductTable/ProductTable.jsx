import ProductRow from '../ProductRow/ProductRow';

function ProductTable({ products }) {

    return (
        <div>
            <ProductRow products={products} />
        </div>
    )
}

export default ProductTable