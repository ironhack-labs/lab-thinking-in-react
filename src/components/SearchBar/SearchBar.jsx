import { Container, Form, Row, Col, Button } from 'react-bootstrap'



const SearchBar = () => {

    return (
        <Container>
            <h3>Search</h3>
            <Row>
                <Form className="d-flex">
                    <Form.Control
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                    />
                    <Button variant="outline-success">Search</Button>
                </Form>
            </Row>
        </Container>
    )
}

export default SearchBar