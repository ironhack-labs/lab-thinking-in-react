import React, { Component } from 'react'
import './Table.css'

export default class SearchBar extends Component {

    collect(e){
        e.preventDefault();
        this.props.new(e.target.value)
    }

    collectCheck = (e)=>{
        (e.target.checked) ? this.props.check(true) : this.props.check(false);


    }
  render() {
    return (
      <React.Fragment>
            <input className="input is-primary" type="search" name="name" onChange={e => this.collect(e)}/>
            <input type="checkbox" onClick={e => this.collectCheck(e)}/> Show only On Stock products
      </React.Fragment>
    )
  }
}
