import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';

/**
 * 定义一个UI组件
 */
class MyReduxTest extends React.Component {
    constructor(){
        console.log(99999999999999999)
        var {name,age} = {name:"kobe",age:12};
        console.log(name)
        console.log(age);
        super();
    }

    render() {
        const {text, onChangeText, onButtonClick2} = this.props;
        return (
            <div>
                <h1 onClick={onChangeText}> {text} </h1>
                <button onClick={onButtonClick2}>click me222</button>
            </div>
        );

    }
}




//reducer
const initialState = {
    text: 'Hello'
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGE_TEXT':
            return {
                text: state.text=='Hello' ? 'world':'Hello'
            }
        case 'BUTTON_CLICK':
            return {
                text: 'Hello world'
            }
        default:
            return initialState;
    }
}

//定义 action
const changeTextAction = {
    type:'CHANGE_TEXT'
}
const buttonClickAction = {
    type:'BUTTON_CLICK'
}


var store = createStore(reducer);


//state 到 UI组件的props属性,总是返回一个映射
//mapStateToProps会订阅 Store，每当state更新的时候，
// 就会自动执行，重新计算 UI 组件的参数，从而触发 UI 组件的重新渲染。
function mapStateToProps(state) {
    return { text: state.text }
}

//用来建立 UI 组件的参数到store.dispatch方法的映射
function mapDispatchToProps(dispatch){
    return{
        onButtonClick2:()=>dispatch(buttonClickAction),
        onChangeText:()=>dispatch(changeTextAction)
    }
}

//connect方法,用于生成容器组件(用UI组件生成,并且用过两个参数函数建立联系)
var MyReduxTest2 = connect(mapStateToProps, mapDispatchToProps)(MyReduxTest)


/**
 * 定义一个导出的UI组件
 */
export default class MyReduxT extends React.Component {
    constructor(){
        super();
    }
    render() {
        return (
            <Provider store={store}>
                <MyReduxTest2 />
            </Provider>
        );

    }
}





//Provider组件，可以让容器组件拿到 state



