import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import './SearchBar.css'


export default class SearchBar extends Component {
    constructor(props){
        super(props)
        this.state={
            searchVal: '',
            inStockOnly: false
        }
    }

    handleChange = (e) =>{
        const target = e.target;
        const val = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]:val
        })
       
        this.props.updateSearch({[name]:val})
    }

    render() {
        return (
            <Container className='mb-5'>
                <Row>
                    <Col>
                        <input name='searchVal' type='text' value={this.state.searchVal} placeholder="Search for Item" onChange={this.handleChange}/>
                    </Col>
                </Row>
                <Row className='mt-3'>
                    <Col>
                        <Form.Check name='inStockOnly' type='checkbox' checked={this.state.inStockOnly} onChange={this.handleChange} label='In stock only'/>
                    </Col>
                </Row>
            </Container>
        
        )
    }
}
