import React from 'react'
import { Row , Col} from 'react-bootstrap'

export default function ProductRow({eachProduct}) {


    return (
        
            <Col>
                <Row>
                    <Col xs={6}>
                        <h3>{eachProduct.category}<br/>{eachProduct.name}</h3>
                    </Col>
                    <Col xs={6}>
                        <p>{eachProduct.price}</p>
                    </Col>
                </Row>
            </Col>
        
    )
}
