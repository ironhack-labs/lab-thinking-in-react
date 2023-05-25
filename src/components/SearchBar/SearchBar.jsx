import { Container, Form } from "react-bootstrap";

export default function SearchBar() {
    return (
        <Container className="md-5">
            <p>Search:</p>
            <Form >
                <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                />
            </Form>
        </Container>
    );
}