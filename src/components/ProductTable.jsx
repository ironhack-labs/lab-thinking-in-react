import ProductRow from "./ProductRow";

function ProductTable(props) {
  //Styles
  const containerFlexColumn = {
    display: "flex", 
    flexDirection:"column",
    border: "1px solid black",
    justifyContent:"center",
    alignItems: "center",
    margin:"40px",
    width: "80vw"
  }
  const containerFlexRow = {
    display: "flex",
    justifyContent: "space-evenly",
    backgroundColor: "lightgrey",
    width:"100%"
  };

  return (
    <div style={containerFlexColumn}>
      <div style={containerFlexRow}>
        <h4>Name</h4>
        <h4>Price</h4>
      </div>

      <div>
        {props.products.map((eachProduct) => {
          return (
            <div key={eachProduct.id} >
              <ProductRow  eachProduct={eachProduct} containerFlexRow={containerFlexRow} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProductTable;
