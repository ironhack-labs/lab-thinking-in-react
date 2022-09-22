const SearchBar = ({ products, setProducts }) => {


    const searchProduct = (eventHTML) => {
        const { value } = eventHTML.target;
        const filteredProducts = products.filter(e => e.name.toLowerCase().startsWith(value))
        setProducts(filteredProducts)
    };

    return (
        <div>
            <h2>Search Bar</h2>
            <label>Search</label>
            <input type="text" onChange={searchProduct} />
        </div>
    )
}

export default SearchBar;