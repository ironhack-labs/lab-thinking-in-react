import { useState } from 'react';
import { Form } from 'react-bootstrap'

function SearchBar({ jsonData }) {
  const [products, setProducts] = useState(jsonData);
  const [productsSearch, setProductsSearch] = useState({ name: '' });

  const handleInputChange = e => {
    const { name, value } = e.target
    setProductsSearch({ [name]: value })
  }

  const filterProduct = products.map(elm => {
    return elm.name.toLowerCase().includes(productsSearch.name.toLowerCase())
  })

  console.log(filterProduct)

  return (
    <>
      <Form >
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>SearchBar</Form.Label>
          <br />
          <Form.Control value={productsSearch.name} onChange={handleInputChange} type="text" name="name" />
        </Form.Group>
      </Form>
    </>

  )
}

export default SearchBar