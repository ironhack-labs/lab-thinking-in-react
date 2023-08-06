function ProductRow(props) {
    const { products } = props;
    return (
        <div className="productsList">
      
            {products.map((product) => (
                <tr key={product.id}> 
                {product.inStock ? (
                <td className="inStock">{product.name}</td>
                ) : (
                <td className="outOfStock">{product.name}</td>
            )}

                <td>{product.price}</td>
                </tr>
            ))}
        
        </div>
    );
}



  export default ProductRow;
