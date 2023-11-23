import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Form, Button } from 'react-bootstrap';



const SearchBar = ({ filterProducts }) => {

    const [searchProduct, setSearchProduct] = useState("")

    const handleProductChange = e => {
        setSearchProduct(e.target.value)
        filterProducts(e.target.value)
    }

    return (
        <Form>

            <Row>
                <Form.Group className="mb-3" controlId="searcher">
                    <Form.Label>Search</Form.Label>
                    <Form.Control type="text" placeholder="Enter a product" value={searchProduct} onChange={handleProductChange} />
                </Form.Group>
            </Row>
            <Row>
                <Col sm={4}>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Only show products in stock" />
                    </Form.Group>
                </Col>
            </Row>

        </Form>
    )
}


export default SearchBar




