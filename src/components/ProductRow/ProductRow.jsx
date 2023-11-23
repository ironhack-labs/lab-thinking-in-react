import { useState } from 'react';
import jsonData from './../../data.json';

function ProductRow({ name, price, inStock, id }) {

    // const [products, setProducts] = useState(jsonData)


    // const [productsBackup, setProductBackup] = useState({ ...jsonData })
    // const [searchData, setSearchData] = useState("")


    // const handleSearchData = e => {

    //     let searched = e.target.value
    //     setSearchData(searched)
    // }

    // const result = productsBackup.filter(e => {
    //     e.name.includes(searched)
    // })


    return (
        <div>
            <p key={id} style={notStock}>{name} && {price}</p>
        </div>
    )
}

export default ProductRow