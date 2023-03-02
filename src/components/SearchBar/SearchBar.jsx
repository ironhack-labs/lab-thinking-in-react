import { useState } from "react"
import Form from 'react-bootstrap/Form';


const SearchBar = ({ filterProducts, filterStock }) => {

    const [filter, setFilter] = useState("")
    const [hasStock, setHasStock] = useState(false)

    const handleStockChange = e => {
        setHasStock(e.target.checked)
        filterStock(hasStock, filter)
    }

    const handleFilter = e => {
        setFilter(e.target.value)
        filterProducts(e.target.value)

    }
    return (
        <>
            <input type="text" value={filter} onChange={handleFilter} />
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check checked={hasStock} onChange={handleStockChange} type="checkbox" label="Only show products in stock " />
            </Form.Group>

        </>

    )

}



export default SearchBar