import data from "../data.json";
import ProductsRow from "./ProductsRow";

function ProductTable(props) {

    const { category, price, inStock, name, id } = props;

    return(
        <div>
            <table style={{display: 'flex', flexDirection: 'column'}}>
               
                <thead style={{display: 'flex', height: '50px', width: '750px', backgroundColor: '#C4C4C4', borderRadius: '10px'}}>
                    <tr> 
                        <th style={{ textAlign: 'center', paddingLeft: '150px', paddingTop: '10px'}}>Name</th>
                        <th style={{ textAlign: 'center', paddingLeft: '350px', paddingTop: '10px'}}>Price</th>
                    </tr>
                </thead>
                <tbody style={{ display: 'flex'}}>
                        <ProductsRow />
                </tbody>
            </table>
        </div>
    );
}

export default ProductTable;

//finished the day trying to print the product table on the page.