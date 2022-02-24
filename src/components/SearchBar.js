import { Form, FormControl, Button } from 'react-bootstrap'
const SearchBar = () => {
    return (
        <Form className="d-flex">
            <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
        </Form>
    )
}
export default SearchBar