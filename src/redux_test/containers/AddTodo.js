/**
 * Created by jey on 2017/4/30.
 */

import React from 'react';
import {connect} from "react-redux";
import {addToDo} from "../actions/index";

let AddTodo = ({dispatch}) =>{
    let input;
    return (<div>
        <form onSubmit={e=>{
        e.preventDefault();
        if(!input.value.trim()){
            return;
         }
         dispatch(addToDo(input.value))
         input.value = '';
        }}>

            <input ref={n=>{input = n;}}/>
            <button type="submit">
                Add Todo
            </button>
        </form>
    </div>)
}

const AddTodoWrap = connect()(AddTodo)


export default AddTodoWrap;