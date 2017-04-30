/**
 * Created by jey on 2017/4/30.
 */


import {connect} from "react-redux";
import {toggleTodo} from "../actions/index";
import TodoList from "../components/TodoList"


const getVisibleTodos = (todos, filter)=>{
    switch(filter){
        case "SHOW_ALL":
            return todos;
        case "SHOW_COMPLETED":
            return todos.filter(t=>t.completed);
        case "SHOW_ACTIVE":
            return todos.filter(t => !t.completed)
    }
}

const mapStateToProps = (state) =>{
    console.log("99999")
    console.log(state)
    return {
        todos:getVisibleTodos(state.todos, state.filter)
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        onTodoClick:(id)=>{
            dispatch(toggleTodo(id));
        }
    }
}

const visibleTodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList);
export default visibleTodoList;