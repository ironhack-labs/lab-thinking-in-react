import { Col, Form, FormGroup, FormLabel, InputGroup } from 'react-bootstrap';



const SearchBar = ({ filterProducts, stockProducts }) => {

    return (
        <>
            <Form.Control onChange={(e) => filterProducts(e.target.value)} />
            <FormGroup>
                <Form.Check onChange={(e) => stockProducts(e.target.checked)} ></Form.Check>
                <FormLabel> Show only products in stock</FormLabel>
            </FormGroup>
        </>
    )
}

export default SearchBar