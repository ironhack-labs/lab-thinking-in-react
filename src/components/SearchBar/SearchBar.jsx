import { useState } from 'react';
import jsonData from './../../data.json';

function SearchBar() {


    const [products, setProduct] = useState({ ...jsonData })
    const [productsBackup, setProductBackup] = useState({ ...jsonData })

    const [searchData, setSearchData] = useState("")


    const handleSearchData = e => {

        let searched = e.target.value

        setSearchData(searched)
    }

    const result = productsBackup.filter(e => {
        e.name.includes
    })


    return (
        <div>
            <h1>IronStore</h1>
            <div className="searchBar">



                <h3>Buscar un producto 1</h3>
                <input type="text" placeholder="Product name my friend" value={searchData} onChange={handleSearchData} />


            </div>
        </div>
    )
}

export default SearchBar