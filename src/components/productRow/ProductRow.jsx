import { Col, Row } from 'react-bootstrap'
import './ProductRow.css'

const ProductRow = ({ theProducts }) => {

    

    return (
        <>
            {
                theProducts.map(elm => {
                    return(
                        <Row key={elm.id} className='productRow'>
                            <Col className={elm.inStock?'':'red'}><p>{elm.name}</p></Col>
                            <Col><p>{elm.price}</p></Col>
                        </Row>

                    )
                })
            }
        </>
    )
}

export default ProductRow