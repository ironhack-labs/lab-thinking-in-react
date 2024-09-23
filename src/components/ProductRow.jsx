function ProductRow({product}){
    return(
        <div id="product-row" className="flex-row space-evenly border-row pd-10">
            <p style={!product.inStock? {color: "red"}:null}>{product.name}</p>
            <p>{product.price}</p>
        </div>
            
    );

}

export default ProductRow;