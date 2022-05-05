import { InputGroup, FormControl } from 'react-bootstrap'
import { useEffect, useState } from 'react'
import ProductsPage from '../products-page/productPage'

function SearchBar({ products }) {

    const [search, setSearch] = useState(products)
    const [searchBackup, setSearchBackup] = useState(products)

    

    return (

        <>
            <InputGroup className='mb-3'>
                <FormControl value={} onChange={handleChange} placeholder='Buscar cerveza' aria-label='Buscar cerveza' aria-describedby='basic-addon2' />
            </InputGroup>
        </>

    )
}

export default SearchBar








    // < div >
    // <InputGroup className=“ mb-3”>
    //     <FormControl
    //         placeholder=“Recipient’s username” aria-label=“Recipient’s username” aria-describedby=“basic-addon2"
    //             />
    // </InputGroup >
    //     </div >