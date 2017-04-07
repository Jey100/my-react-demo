import React from 'react';
import ReactDOM from 'react-dom';
//import App from './App';

import MyDatas from './MyDatas';
import MyTable from './MyTable';
import MyAdd from './MyAdd';
import MySearch from './MySearch';


export default class MyApp extends React.Component{
    constructor(){
        super();
        this.state = {
            "datas" : new MyDatas
        };
    }

    //添加
    add(item){
        this.setState({
            "datas" : this.state.datas.add(item)
        });
    }

    //删除
    remove(name){
        this.setState({
            datas: this.state.datas.remove(name)
        });

    }

    //查找
    search(name){
        this.setState({
            datas: this.state.datas.search(name)
        });
    }

    render(){
        return (
            <div>
                <MySearch searchItem={this.search.bind(this)}/>
                <MyTable items={this.state.datas.allEntity} remove={this.remove.bind(this)}/>
                <MyAdd addItem={this.add.bind(this)}/>
            </div>



        )
    }
}
