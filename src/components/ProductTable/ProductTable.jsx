import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap'

function ProductTable({ jsonData }) {
  const [products, setProducts] = useState(jsonData);

  return (
    <>
      {products.map(elm => {
        return (


          <Container>
            <Row>
              <p>{elm.name} ---------------------------- {elm.price}</p> <br></br>
            </Row>
          </Container>
        )
      })
      }
    </>

  )
}

export default ProductTable