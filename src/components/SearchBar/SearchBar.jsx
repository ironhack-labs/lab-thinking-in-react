
import { useState } from 'react'
import { Form, InputGroup } from 'react-bootstrap'



const SearchBar = () => {

    const [name, setName] = useState("")

    const handlerChange = e => {
        setName(e.target.value)
        filterProducts(e.target.value)
    }


    return (
        <>
            <Form.Label htmlFor="textSe">Search</Form.Label>
            <Form.Control type="text" id="textSe" oneChange={handlerChange} name="search" />
            <InputGroup.Checkbox aria-label="Checkbox for following text input" />

        </>


    )
}

export default SearchBar