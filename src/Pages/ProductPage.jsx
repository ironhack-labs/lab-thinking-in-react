import { useState } from 'react'
import Data from '../data.json'
import SearchBar from '../Components/SearchBar/SearchBar'
import ProductTable from '../Components/ProductTable/ProductTable'

const ProductPage = () => {

    const [dataArray, setDataArray] = useState(Data)
    const [dataArrayBackup, setDataArrayBackup] = useState(Data)

    const filterData = query => {

        if (typeof query == "boolean") {
            if (query == true) {
                const filterData = dataArrayBackup.filter(elm => elm.inStock == query)
                setDataArray(filterData)
            }

        } else {
            const filterData = dataArrayBackup.filter(elm => elm.name.includes(query))
            setDataArray(filterData)
        }


    }
    return (
        <div>
            <SearchBar filterData={filterData} />
            <hr />
            <ProductTable data={dataArray} />
        </div>
    )
}

export default ProductPage