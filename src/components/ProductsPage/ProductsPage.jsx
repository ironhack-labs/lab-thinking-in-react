import { useState } from "react"
import { Container, Row, Col } from "react-bootstrap"
import ProductsTable from "../ProductTable/ProductTable"
import SearchBar from "../SearchBar/SearchBar"
import jsonData from './../../data.json'


const ProductsPage = () => {

    const [products, setProducts] = useState(jsonData)



    return (
        <Container>
            <h1> IronStore </h1>
            <Row>
                <SearchBar />
            </Row>
            <Row>
                <ProductsTable />
            </Row>
        </Container>
    )
}

export default ProductsPage