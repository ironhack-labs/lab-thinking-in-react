import React, { Component } from "react";
import "./styles.css";

export default class CheckBoox extends Component {

  render() {
      const {value,handleInput} = this.props
    return ( 
        <div className="line filecheckbox"> 
            <input className="ckb" type="checkbox" 
            value={value}
            onChange={handleInput} />
            <label> Only show products in stock</label>
        </div>
    )
  }
}
