import './ProductTable.css';
import ProductRow from "./ProductRow/ProductRow";

function ProductTable({ searchTerm }) {
  
  return (
    <div className='d-flex justify-content-center align-items-center w-100'>
      <table className="table mt-3 w-75 ">
        <thead className=''>
          <tr className="text-center table-secondary producttable-row">
            <th scope="col">Name</th>
            <th scope="col">Price</th>
          </tr>
        </thead>

        <tbody className="">
          {searchTerm?.map((product, index) => 
              <ProductRow key={index} {...product}/>
          )}
        </tbody>
      </table>
    </div>
  );
}


export default ProductTable;