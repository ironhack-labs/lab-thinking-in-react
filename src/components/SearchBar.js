function SearchBar (props) {

    function productsInStock () {
        const copiedProducts = [...props.products]
        const newProductList = []
        for(let i=0; i<copiedProducts.length; i++){
            if (copiedProducts.inStock === true){
                newProductList.push(copiedProducts[i])
            }
        }
        props.setProducts(newProductList)
    }

    return(
        <div>
            <h2>Search</h2>
            <input className="search-bar" type='text'></input>
            <div>
                <input type="checkbox" onClick={productsInStock}></input>
                <p>Only show products in stock</p>                
            </div>
            
        </div>
    )
}

export default SearchBar