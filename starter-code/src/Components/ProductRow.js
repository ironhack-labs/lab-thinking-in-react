import React from 'react';
import '../App.css';

//in function component you pass "props" as parameter; in class you write "this.props.xxx"
function ProductRow(props) {
    let styleOfText;
    if (!props.stocked) {
        styleOfText = {color:"red"}
    }
    else {
        styleOfText = {color:"black"}
    }

      return (
            <tr key="">
                <td style={styleOfText}>{props.name}</td>
                <td>{props.price}</td>
            </tr>
       
      );
    }
  

  export default ProductRow;