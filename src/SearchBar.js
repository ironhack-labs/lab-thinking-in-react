
function SearchBar(props) {
    //{Passar as props do state + setState num evento com função anônima}

    return (
        <div className="m-5">
            <div className="m-5">
                <h5>Search</h5>
            </div>
            <div className="input-group mb-5">
                <input type="text"
                className="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-default"
                placeholder="Search"
                value={props.value}
                onChange={props.onChange}/>
            </div>
            <div className="col-12">
                <div className="form-check d-flex justify-content-center">
                    <input className="form-check-input"
                    type="checkbox"
                    id="invalidCheck"
                    checked={props.filter}
                    onChange={props.onFilter}
                    required/>
                    <label className="form-check-label" htmlFor="invalidCheck">
                        Only show products in store
                    </label>
                </div>
            </div>
        </div>

    );

};

export default SearchBar;