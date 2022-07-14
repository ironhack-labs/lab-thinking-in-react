import { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap'


function SearchBar() {

    const [search, setSearch] = useState('');
    // const [checked, setChecked] = useState()

    const searchHandler = e => {
        setSearch(e.target.value)
    }

    return (
        <label>
            <input type='text' onChange={searchHandler} ></input>
            <input type='checkbox'></input>
        </label>
    )
}

export default SearchBar


            // <Form>
            //     <Form.Group className="mb-3" controlId="FormPLaintext">
            //         <Form.Label></Form.Label>
            //         <Form.Control type="text" name='name' value={name} onChange={searchHandler} />
            //     </Form.Group>
            //     <Form.Group className="mb-3" controlId="formBasicCheckbox">
            //         <Form.Check type="checkbox" label="Check me out" />
            //     </Form.Group>
            // </Form>