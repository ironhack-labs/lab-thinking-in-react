


function ProductRow(props) {
    console.log("productsRow porps", props)

    const list = props.products.map(product=>{
        return(
            <tr key={product.id}>
                <td>{product.inStock ? <td>{product.name}</td> : <td className="noStock">{product.name}</td>}</td>
                <td>{product.price}</td>
            </tr>
        )
    })
    return (
        <div>{list}</div>
    )   
}

export default ProductRow