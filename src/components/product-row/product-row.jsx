
function ProductRow({ products, search, isChecked }) {

    const filterProducts = products.filter((p) => (
        p.name.toLowerCase().includes(search.toLowerCase())
    ));
    return (
        <>
            {filterProducts.map((product, index) => (
                <tr key={index}>
                    {product.inStock ? <><td>{product.name}</td> <td>{product.price}</td> </>: 
                    !isChecked && <><td className='text-danger'>{product.name}</td><td>{product.price}</td></>}
                    
                </tr>
            ))}
        </>
    );
}

export default ProductRow;
