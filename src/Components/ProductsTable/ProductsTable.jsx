import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import ProductsRow from "./../ProductsRow/ProductsRow"

const ProductTable = ({ products }) => {



    const foundProduct = products.find((oneProduct) => {   //  <== ADD
        return oneProduct.inStock === true;
    });


    return (

        <Container>
            <Row>
                <Col md={6} >
                    <h2>name</h2>
                </Col>
                <Col md={6} >
                    <h2>Price</h2>
                </Col>




                {
                    products.map((product, idx) => {

                        return (


                            <ProductsRow {...product} foundProduct={foundProduct} />

                        )



                    })
                }
            </Row>

        </Container>
    )
}




export default ProductTable