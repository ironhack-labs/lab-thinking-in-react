import { useState } from 'react'
import { Form, Container } from 'react-bootstrap'

const SearchBar = ({ handleFilterChange }) => {


    return (

        <Container>
            <Form.Label htmlFor="search" className='mt-2'>Search</Form.Label>
            <Form.Control type="text" id="search" onChange={handleFilterChange} />
            <Form.Text id="search" muted className='m-3' > </Form.Text>
            <Form.Check
                type='checkbox'
                id={`stock`}
                label={`Only show product in stock`}
                className='m-4'
            />

        </Container>

    )
}

export default SearchBar