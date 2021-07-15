import { Component } from "react"
import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'


class Fila extends Component {
    constructor(props) {
        super()
        this.state = {
            name: props.name,
            price: props.price
        }
    }

    render() {

        return (
            <>
                <Container>
                    <Row>
                        <Col md={6}><p>{this.state.name}</p></Col>
                        <Col md={6}><p>{this.state.price}</p></Col>
                    </Row>
                </Container>

            </>
        )
    }

}

export default Fila