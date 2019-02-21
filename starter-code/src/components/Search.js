import React, { Component } from 'react'
import { FormGroup, Form, Input, Label } from 'reactstrap'

export default class Search extends Component {
  render() {
    // this.props.handler
    return(
      <Form>
      <FormGroup>
         <Label for="exampleSearch">Search</Label>
         <Input
           type="search"
           name="search"
           id="exampleSearch"
           placeholder="product name"
           value={this.props.value}
           onChange={e => this.props.onSearchChange(e.target.value)}
         />
       </FormGroup>
       <FormGroup check>
         <Label check>
           <Input type="checkbox" onClick={e => this.props.onStockChange(e.target.checked)}/>{' '}
           Only show Products in stock
         </Label>
       </FormGroup>
       <hr id='rulerOfTheUniverse'/>
      </Form>
    )
  }
} 