import { useState } from "react"

const SearchBar = ({ products, polizon }) => {

    const [data, setData] = useState(products)
    const [copyData, setCopyData] = useState(products)

    const [searchInput, setSearchInput] = useState([])

    const handleInput = e => {
        let searchArr = [...searchInput, e.target.value].reduce((acc, current) => (acc + current))

        setSearchInput(searchArr)

        filterProducts()
    }

    const filterProducts = () => {
        let newData = []

        copyData.filter(elm => {

            if (elm.name.startsWith(searchInput)) {
                newData.push(elm)
            }
        })

        setCopyData(newData)

        polizon(newData)



    }



    console.log(copyData)


    return (
        <input type="text" onChange={handleInput} />
    )
}

export default SearchBar