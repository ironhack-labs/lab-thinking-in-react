function ProductRow(props) {
    const { products, searchValue, inStock} = props

return (
    <>
    {products.map( (product, index) => {
        if (product.name.toLowerCase().includes(searchValue.toLowerCase())) {
                if (!inStock) {
                    return (
                        <div className="product-row" key={index}>
                            <h4>{product.name}</h4>
                            <h4>{product.price}</h4>
                        </div>
                        )
                    }
                
                else if (product.inStock) {
                    return (
                        <div className="product-row" key={index}>
                            <h4>{product.name}</h4>
                            <h4>{product.price}</h4>
                        </div>
                        )
                    }
            }
    })

    }
    </>
)

}

export default ProductRow;