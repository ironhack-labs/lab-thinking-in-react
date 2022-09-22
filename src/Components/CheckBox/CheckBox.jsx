import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
const CheckBox = ({ jsonData, setProducts }) => {
    const seeCheckbox = (event) => {
        // console.log(event.target.checked)
        if (event.target.checked) {
            const filteredProducts = jsonData.filter((product) => {
                return !product.inStock;
            });
            setProducts(filteredProducts);
        } else {
            setProducts(jsonData);
        }
    }

    return (
        <>
            <InputGroup className="mb-3">
                <InputGroup.Checkbox aria-label="Checkbox for following text input" onChange={seeCheckbox} />
                <Form.Control value="Only products in stock" />
            </InputGroup>
        </>
    );
};

export default CheckBox;
