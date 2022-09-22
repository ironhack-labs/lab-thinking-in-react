
function SearchBar({ items, setProducts }) {

    const search = (e) => {
        console.log(e.target.value)
        let text = e.target.value

        let results = items.filter(item => item.name.includes(text))
        console.log(results)
        setProducts(results)
    }

    return (
        <div>
            <h1>Barra navegacion</h1>

            <input onChange={search} type="text" />
        </div>
    )
}
export default SearchBar;