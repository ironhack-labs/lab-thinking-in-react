import './SearchBar.css'
import { Form, Container } from 'react-bootstrap'
import { useState } from 'react'






const SearchBar = (theProducts) => {

    const [productData, setProductData] = useState({
        name: ''
    })

    const { name } = productData

    const handleImputChange = e => {
        const { value, name } = e.target

        setProductData({
            ...productData,
            [name]: value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()

        
    }

    return (
        <>
            <Form onChange={handleSubmit} >

                <Form.Label htmlFor="inputPassword5">Search</Form.Label>
                <Form.Control
                    type="text"
                    id="searchBar"
                    aria-describedby="searchForm"
                    value={name}
                    name='title'
                    onChange={handleImputChange}

                />

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check className='checkbox' type="checkbox" label="Only show products in stock" />
                </Form.Group>

            </Form>
        </>
    )
}

export default SearchBar