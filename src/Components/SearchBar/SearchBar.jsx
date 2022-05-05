import { useState } from 'react';
import { Form, InputGroup } from 'react-bootstrap';
import jsonData from './../../data.json';



const SearchBar = () => {

    const [name, setName] = useState('')

    // const search = (e) => { <----- Intento de buscador que NO funciona
    //     setName(e.target.value)
    // }


    return (
        <>
            <Form.Label htmlFor="textSe">Search</Form.Label>
            <Form.Control type="text" id="textSe" />
            <InputGroup.Checkbox aria-label="Checkbox for following text input" />
        </>
    )
}

export default SearchBar;
