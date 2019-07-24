import React from 'react';
import '../../App.css';

function ModalForm(props) {

    return (
    
      <div>
        <form ref={props.clear} onSubmit={props.addProduct}>
          <legend>Name of Product</legend>
          <input onChange={props.changeText} value={props.newProduct.name} name="name"></input>
          <legend>Price of Product</legend>
          <input onChange={props.changeText} value={props.newProduct.price} name="price"></input>
          <legend>Category of Product</legend>
          <input onChange={props.changeText} value={props.newProduct.category} name="category" ></input>
          <legend>In Stock?</legend>
          {props.newProduct.checked &&
          <input onChange={props.changeCheck} value={props.newProduct.checked} checked name="newCheck" type="checkbox"></input>
          }
          {!props.newProduct.checked &&
          <input onChange={props.changeCheck} value={props.newProduct.checked} name="newCheck" type="checkbox"></input>
          }
          <legend></legend>
          <button>Add Product!</button>
        </form>
      </div>
            
    );
  }


export default ModalForm;
