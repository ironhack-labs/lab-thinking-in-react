import ProductsRow from "./../ProductRow/ProductRow"


const ProductTable = ({ products }) => {

    return (
        !products ?
            <h1>cargando</h1>
            :
            <>
                {
                    products.map((elm, i) => <ProductsRow key={i}{...elm} />)
                }
            </>
    )

}

export default ProductTable