import React, {Component} from 'react';
import './App.css';
import Searchinput from './components/Searchinput';
import Table from  './components/Table';
import infoData from './data.json';

class App extends Component {

  state ={
    data:[]
  }

  componentDidMount(){

  this.setState({data:infoData.data})
  }

  handleChange = (event) =>{
    
    const {value} = event.target
   

    let newData = infoData.data.filter ((item,index) => (item.name.toLowerCase().includes(value.toLowerCase())))
    this.setState({data:newData})

  }

  render(){
  return (
    <div className="App">
      <div>
        <h1>IronStore</h1>
      </div>
      <Searchinput handleChange={this.handleChange} />
      <Table data={this.state.data}/>
    </div>
   );
  }
}

export default App;
