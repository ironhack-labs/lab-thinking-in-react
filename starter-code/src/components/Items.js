import React from 'react'
import { Col, Row } from 'react-bootstrap';

 function FindItems (props) {
    return (
      
       <Row>
       <Col md={6}>
                <p>{props.name}</p>
           </Col>
          <Col md={6}>
                <p>{props.price}</p>
          </Col>
        </Row>
       
    )
}
export default FindItems