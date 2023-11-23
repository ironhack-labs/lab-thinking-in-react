import ProductRow from "../ProductRow/ProductRow";


function ProductTable({ products }) {


    return (
        <div>
            {
                products.map(e => {

                    return (
                        <ProductRow{...e} />
                    )
                })
            }

        </div>
    )
}

export default ProductsPage