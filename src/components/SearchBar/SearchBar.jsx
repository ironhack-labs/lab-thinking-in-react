import { Form } from 'react-bootstrap';

const SearchBar = ({ products, findProductByName }) => {

    const findProduct = (event) => {
        const { value } = event.target
        let _products = [...products]

        _products = _products.filter((product) => product.name.toLowerCase().includes(value.toLowerCase()))
        findProductByName(_products)
    }

    return (
        <>
            <h2>Search</h2>
            <Form>
                <Form.Group>
                    <Form.Control name='name' onChange={findProduct} ></Form.Control>
                </Form.Group>
            </Form>
        </>
    )

}

export default SearchBar