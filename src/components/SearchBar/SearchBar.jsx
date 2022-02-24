import { useState } from 'react'
import {Form} from 'react-bootstrap'

const SearchBar = ({products, updateProducts}) => {
    const [search, setSearch] = useState("")

    const handleChange = e => {
        setSearch(e.target.value)
        updateProducts(filterProducts(e.target.value))
    }

    const filterProducts = (str) => {
        let input = str.toLowerCase()

        let filteredProducts = products.filter(elm => elm.name.toLowerCase().includes(input))

        return filteredProducts
    }



    return (
        <Form>
            <Form.Group className="mb-3" controlId="formBasicSearch">
                <Form.Label>Search</Form.Label>
                <Form.Control type="search" onChange={handleChange} placeholder="Search" />
            </Form.Group>

           
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Only show products in stock" />
            </Form.Group>
        </Form>
    )
}

export default SearchBar