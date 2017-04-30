/**
 * Created by chenliming on 2017/4/30.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux"
import {createStore} from "redux"
import todoApp from './reducers';
import App from './components/App';

let store = createStore(todoApp)
//ReactDOM.render(
//    <Provider store={store}>
//        <App/>
//    </Provider>
//    document.getElementById('root')
//);


export default class MyReduxApp extends React.Component {
    constructor(){
        super();
    }
    render() {
        return (
            <Provider store={store}>
                <App/>
            </Provider>
        );

    }
}