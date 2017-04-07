import React from 'react';
import ReactDOM from 'react-dom';


export default class MySearch extends React.Component{
    constructor(){
        super();
    }


    search(){
        let searchInput = ReactDOM.findDOMNode(this.refs.searchInput);
        console.log(searchInput.value)
        this.props.searchItem(searchInput.value.trim())
    }

    render(){
        return (
            <div className="searchBox">
            <input ref='searchInput' onChange={this.search.bind(this)} type='text' placeholder='Search...' />
            </div>
        )
    }
}
