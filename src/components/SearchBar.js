import { useState } from 'react'
import { Form, Container } from 'react-bootstrap'


function SearchBar(theProducts) {

    const [firstLetter, setFirstLetter] = useState('')

    const handleProduct = e => {
        setFirstLetter(e.target.value)
        // filteredProducts(e.target.value)
    }

    // const filteredProducts = (letter) => {

    //     let theProducts = { products }

    //     if (theProducts.includes(letter)) {
    //         console.log('hey')
    //     } else {
    //         console.log('nothing')
    //     }

    // }

    return (
        <Container>
            <Form.Label htmlFor="text">Search</Form.Label>
            <Form.Control
                type="text"
                id="text"
                onChange={handleProduct}
            />

            <Form.Group className="mb-3">
                <Form.Check type="checkbox" label="Only show products in stock" />
            </Form.Group>
        </Container>
    )
}

export default SearchBar