function SearchBar({ setSearch, setStock }) {


    return (

        <div className="d-flex flex-column justify-content-center gap-3 w-100">
            <p className="m-0 text-center">Search</p>

            <div className="input-group flex-nowrap">
                <input type="text" class="form-control" placeholder="Product..." aria-describedby="addon-wrapping" onChange={(e) => setSearch(e.target.value)}/>

            </div>

            <div class="form-check">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" onChange={(e) => setSearch(e.target.checked)} />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                    Only show products in stock
                </label>
            </div>

        </div >
    )

}

export default SearchBar;