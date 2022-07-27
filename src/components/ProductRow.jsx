import { Card, Col } from 'antd';

function ProductRow(props) {

    const {name, price, inStock} = props.product

  return (
  <Col>
    <Card>
      <div className="product">
        {!inStock ? <p style={{color: "red"}}>{name}</p> : <p>{name}</p>}
        
        <p><b>{price} </b></p>
      </div>
    </Card>
  </Col>
  )
}

export default ProductRow;