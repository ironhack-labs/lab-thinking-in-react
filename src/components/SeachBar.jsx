import { useEffect, useState } from "react"

function SearchBar({ filterProducts }) {
    const [information, setInformation] = useState({ search: '', checkbox: false })

    useEffect(() => {
        filterProducts(information)
    }, [information])

    const handleChange = e => {
        if (e.target.type === 'search')
            setInformation({ ...information, [e.target.type]: e.target.value })
        else
            setInformation({ ...information, [e.target.type]: e.target.checked })
    }


    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid d-flex">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <input className="form-control" type="search" placeholder="Search" onChange={handleChange} />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                        <br />
                    </div>
                    <input type="checkbox" onChange={handleChange} />
                </div>
            </nav>
        </>

    )

}
export default SearchBar