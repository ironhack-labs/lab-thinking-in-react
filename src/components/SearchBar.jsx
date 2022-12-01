
const SearchBar = ({ products, setFilter }) => {

    const filterProducts = (event) => {
        const { value } = event.target
        let _products = [...products]
        _products = products.filter(product => product.name.toLowerCase().includes(value.toLowerCase()))
        setFilter(_products)
    }
    return (
        <input type="text" name="product" onChange={filterProducts} />
    )
}

export default SearchBar