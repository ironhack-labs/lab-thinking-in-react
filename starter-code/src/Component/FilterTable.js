import React,{Component} from  'react';
import SearchBar from "./SearchBar";
import ProducTable from "./ProducTable";
import Products from "../data";

class FilterTable extends Component {
  constructor(){
    super();
    this.state = {
      check:false,
      category1:{},
      category2:{},
      typeCategory:{},
      elementSearch:""
    }
  }

  handleCheck= (e) => {
    let {check,category1,category2}= this.state;
    check = e.target.checked;
    // console.log(e.target)
    // check=!check;
    if(check) {
      category1 = category1.filter((el, i) => {
        return el.stocked === false
      })
      category2 = category2.filter((el, i) => {
        return el.stocked === false
      })
    }
      else{
      this.listCategory()
      }
    console.log(check)
    this.setState({check,category1,category2});

  }

  searchElement = (e) => {
    let {category1, category2,elementSearch}=this.state;
    elementSearch=e.target.value;

    console.log("lo qse busca",elementSearch)
    category1=category1
      .filter(
      (el) => {
        return el.name.toLowerCase().indexOf(elementSearch.toLowerCase()) !==-1;
      })
    category2=category2
      .filter(
      (el) => {
        return el.name.toLowerCase()
          .indexOf(elementSearch.toLowerCase()) !==-1;
      })

    this.setState({category1, category2,elementSearch})

  }

  listCategory = () => {

    let {category1, category2,typeCategory}=this.state;
    category1= Products.data.filter((ele,i ) =>
    {
      return ele.category === "Sporting Goods"
    });
    console.log('catlis',category1)
    category2= Products.data.filter((ele,i ) =>
    {
      return ele.category === "Electronics"
    });

    this.setState({category1,category2,typeCategory})
  }

  componentWillMount() {
    this.listCategory()

  }


  render() {
      let {category1,category2,check}=this.state;
    return(
      <div className="container">
        <SearchBar
        search={this.searchElement}
        />
        <form >
          <p>
            <label>
              <input
                type="checkbox"
                onChange={this.handleCheck}
              />
              <span>List all products</span>
            </label>
          </p>
        </form>
        <ProducTable
        checked={check}
        category1={category1}
        category2={category2}
        />
      </div>

    );
  }
}

export default FilterTable;