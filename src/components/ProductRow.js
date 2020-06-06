import React from "react";

    
class ProductRow extends React.Component {


    render() {
       // console.log(this.props.data)
        console.log(this.props.data[0].name, "is in Stock")
        let style = {color: "black"}
        if (!this.props.data[0].stocked){
            style = {color: 'red'}
            
        }

    return (
       
        <div>
            <p style={style}>{this.props.name} ---- {this.props.price}</p> 
        

        </div>      
        );
      };
    }

export default ProductRow;    