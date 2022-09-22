const ProdutRow = ({ products }) => {
    const color = { color: 'red' }
    return (
        <div>
            {products.map(product =>
                <div className="row" key={product.id}>
                    {product.inStock ? <p>{product.name}</p> : <p style={color}>{product.name}</p>}
                    <p>{product.price}</p>
                </div>
            )}
        </div>
    )
}

export default ProdutRow;