import { FormControl, InputGroup } from 'react-bootstrap'

const Searchbar = ({ handleChange }) => {
    return (
        <InputGroup className="mb-3">
            <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon1">🔎 </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
                type="text"
                className="searchBar"
                placeholder="Search for products..."
                onChange={handleChange}
        />
        </InputGroup>
    )
}

export default Searchbar