import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
    Link,
    HashRouter} from 'react-router-dom';
import List from './component/MyTable';
import Home from './component/MyApp';
import Add from './component/MyAdd';
import MyRedux from './myRedux';

const MyRouter = () => (
    <Router>
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/list">列表</Link></li>
                <li><Link to="/add">添加</Link></li>
                <li><Link to="/myRedux">redux-demo页</Link></li>
            </ul>

            <hr/>

            <Route exact path="/" component={Home}/>
            <Route path="/list" component={List}/>
            <Route path="/add" component={Add}/>
            <Route path="/myRedux" component={MyRedux}/>
        </div>
    </Router>
)
export default MyRouter
