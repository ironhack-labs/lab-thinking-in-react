import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl'





const Search = ({searcher, filterCheck}) => {
    return (
        <>
            <Form  inline onChange={searcher}>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            </Form>
            <Form>
                <input onChange={filterCheck} type="checkbox" label="Check me out" />
            </Form>

            
        </>
    )
}

export default Search