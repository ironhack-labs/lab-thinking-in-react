import { Button, Form } from "react-bootstrap"

const SearchBar = ({ setProducts, jsonData }) => {
    // const [_products, _setProducts] = useState(products);
    const handleSearch = (e) => {
        const search = e.target.value;
        const filteredProducts = jsonData.filter((product) => {
            return product.name.toLowerCase().includes(search.toLowerCase());
        });
        setProducts(filteredProducts);
        // setProducts(products);
    };


    return (
        <Form className="d-flex">
            <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                onChange={handleSearch}
            />
            {/* <Button variant="outline-success" >Search</Button> */}
        </Form>)

}

export default SearchBar