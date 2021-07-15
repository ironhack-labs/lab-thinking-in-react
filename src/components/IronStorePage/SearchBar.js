import { Form, FormControl } from 'react-bootstrap'

const SearchBar = () => {

    return (
        <Form className="d-flex">
            <FormControl
                type="search"
                placeholder="Search"
                className="mr-2"
                aria-label="Search"
            />
            )

}