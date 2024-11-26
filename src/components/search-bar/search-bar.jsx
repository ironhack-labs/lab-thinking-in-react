import { useEffect } from "react";

function SearchBar({ className = "", search, onSearch, isChecked, setIsChecked }) {

    useEffect(() => {

        document.getElementById("search").focus();

    }, [])
    const handleSubmit = (event) => {
        event.preventDefault()

    }

    return (
        <div className={`${className} container mt-5`}>
            <form onSubmit={(event) => handleSubmit(event)} className="d-flex flex-row flex-wrap" role="search">
                <div className="container d-flex mb-3">
                    <input
                        value={search}
                        onChange={(event => {
                            onSearch(event.target.value);
                        })}
                        id="search"
                        className="form-control me-2"
                        type="text"
                        placeholder="Search"
                        aria-label="Search"
                    />
                    <button className="btn btn-primary" type="submit">Search</button>
                </div>
                <div className="container d-flex mb-3 gap-2 justify-content-center">
                    <input
                        type="checkbox"
                        name="only-avalible"
                        id="chekbox"
                        onChange={() => setIsChecked(!isChecked)}
                        checked={isChecked}
                    />
                    <label className="pb-1" htmlFor="checkbox">Only show prodoucts in Stock</label>
                </div>
            </form>
        </div>
    );
}

export default SearchBar;