import ProductRow from "./ProductRow";
function ProductTable(props) {


    // console.log(props)
    return (
        <>
            {props.products.filter(product => product.name.toLowerCase().includes(props.query.toLowerCase())).filter(product => {
                if (props.checkbox) {
                    return product.inStock
                } else {
                    return product
                }
            }).map(product => {
                return <ProductRow productRow={product} key={product.id} />
            })}
        </>
    )


}

export default ProductTable;