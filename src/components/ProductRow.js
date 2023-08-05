import jsonData from '../data.json';

function ProductRow() {
  return (
    <div>
      {jsonData.map(function (el) {
        // let myStyle;
        // if (el.inStock === false) {
        //   myStyle = { color: 'red' };
        // } else {
        //   myStyle = {};
        // }

        return (
          <tr>
            {/* <td style={myStyle}>{el.name}</td> */}
            <td style={{ color: !el.inStock ? 'red' : '' }}>{el.name}</td>
            <td>{el.price}</td>
          </tr>
        );
      })}
    </div>
  );
}
export default ProductRow;
