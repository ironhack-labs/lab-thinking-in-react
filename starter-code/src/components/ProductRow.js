import React from 'react'
import { Row, Col } from 'antd'

function ProductRow({ price, stocked, name }) {
  return (
    <div style={{color: (stocked) !== "ture" ? 'green': 'red'}}>
      <Row>
        <Col xs={2} sm={4} md={6} lg={8} xl={10}>{name}</Col>
        <Col xs={2} sm={4} md={6} lg={8} xl={10}>{price}</Col>
      </Row>
    </div>
  )
}

export default ProductRow
