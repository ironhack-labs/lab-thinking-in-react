import { useState } from 'react';
import jsonData from './../../data.json';
// import { Form, Button } from 'react-bootstrap'

function SearchBar({filterProducts}) {
    const [products, setProducts] = useState(jsonData);
    const [searchInput, setSearchInput] = useState("");
    const [checkedInput, setCheckedInput] = useState(false);

    const handleSelect = e => {

        const { name } = e.target

        let nameValue = searchInput
        let checkedValue = checkedInput

        if (name == "name") nameValue = e.target.value
        if (name == "checkbox") checkedValue = e.target.checked

        setSearchInput(nameValue)
        setCheckedInput(checkedValue)
        filterProducts(nameValue, checkedValue)
    }

    return (
        <div>
            <form>
                <label>
                    Search
                    <input type="text" value={searchInput} name="name" onChange={handleSelect} />
                </label>
                <label>
                 Only show products in stock
                    <input type="checkbox" checked={checkedInput} name="checkbox" onChange={handleSelect}/>
                </label>
            </form>
            {/* <Form onSubmit={handleSubmit}>
                <Form.Group className="" controlId="title">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" value={title} onChange={handleInputChange} name="title" />
                </Form.Group>

                <Form.Group className="" controlId="description">
                    <Form.Label>Descripción</Form.Label>
                    <Form.Control type="text" value={description} onChange={handleInputChange} name="description" />
                </Form.Group>

                <Form.Group className="" controlId="length">
                    <Form.Label>Longitud (m)</Form.Label>
                    <Form.Control type="number" value={length} onChange={handleInputChange} name="length" />
                </Form.Group>

                <Form.Group className="" controlId="inversions">
                    <Form.Label>Inversiones</Form.Label>
                    <Form.Control type="number" value={inversions} onChange={handleInputChange} name="inversions" />
                </Form.Group>

                <Form.Group className="" controlId="imageUrl">
                    <Form.Label>Imagen (pega la URL)</Form.Label>
                    <Form.Control type="url" value={imageUrl} onChange={handleInputChange} name="imageUrl" />
                </Form.Group>

            </Form > */}
        </div>
    )
}

export default SearchBar