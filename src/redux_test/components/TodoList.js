/**
 * Created by jey on 2017/4/30.
 */

import React from 'react';
import Todo from "./Todo";

/**
 * 函数形式写法
 * @param todos
 * @param onTodoClick
 * @returns {XML}
 * @constructor
 */
const TodoList = ({todos = [], onTodoClick}) =>{
    return (
        <ul>
        {
            todos.map(todo=>
                 <Todo key={todo.id}
                    {...todo}
                    onClick={()=>onTodoClick(todo.id)}
                 />
            )
        }
    </ul>)
}


/**
 * 组件形式写法
 */

//
//class TodoList extends React.Component{
//    render(){
//        return(
//            <li
//                onClick={this.props.onClick}
//                style={{ textDecoration : this.props.completed ? 'line-through' : 'none' }}
//            >
//                {this.props.text}
//            </li>
//        )
//    }
//}
export default TodoList;