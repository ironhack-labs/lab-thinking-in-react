import productData from "../../data.json"
import { useEffect, useState } from "react"
import "./SearchBar.css"

const SearchBar = () => {


    const [searchInput, setSearchInput] = useState("")

    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
    };

    if (searchInput.length > 0) {
        productData.filter((elm) => {
            return elm.name.match(searchInput);
        });
    }


    useEffect(() => {

        setSearchInput(productData)

    }, [])




    return (

        <div className="main">
            <h1>React Search</h1>
            <div>

                <input
                    type="text"
                    placeholder="Search here"
                    onChange={handleChange}
                    value={searchInput} />

                <table>

                    {productData.map((elm) => {

                        <tr>
                            <td>{elm.name}</td>
                            <td>{elm.price}</td>

                        </tr>

                    })}
                </table>
            </div>
        </div>

    )



}

export default SearchBar
