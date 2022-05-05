import { Row, Col } from "react-bootstrap";
import './ProductsRow.css'



const ProductsRow = ({ name, price, inStock, foundProduct }) => {

    let color = {

        color: "red"
    }



    return (
        <>
            <Col md={6}>
                {inStock ?
                    <p style={color} >{name}</p>
                    :
                    <p>{name}</p>
                }
            </Col>
            <Col md={6}>
                {price}
            </Col>
        </>

    )
}

export default ProductsRow;
