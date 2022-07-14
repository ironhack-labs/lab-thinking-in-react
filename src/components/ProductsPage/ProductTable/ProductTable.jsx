import { Container, Table} from "react-bootstrap"


const ProductTable = ({product }) => {

    console.log(product)
    return (
        <Container>
                <Table striped bordered hover>
                  {
                    product.map(el => {
                        return (
                            <ProductRow prop={el}/>
                        )
                    })
                  }
                </Table>
        </Container>
    )
}

export default ProductTable