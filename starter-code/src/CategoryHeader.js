import React, {Component} from 'react';
import './App.css';



class CategoryHeader extends Component {


    render(){
        return(
            <div className="category-header">
                {this.props.categoryTitle}
            </div>
        )
    }


}



export default CategoryHeader;