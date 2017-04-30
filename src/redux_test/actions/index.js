/**
 * Created by jey on 2017/4/30.
 */

/**
 *
 * @type {number}
 * des: action可以解释为行为的抽象,必须有一个type
 */

let todoId = 0;
export const addToDo = (text) =>{
    return{
        type:"ADD_TODO",
        id:todoId++,
        text
    }
}



export const setVisibility = (filter) =>{
    return {
        type:"SET_VISIBILITY",
        filter
    }
}

export const toggleTodo = (id) =>{
    return {
        type:"TOGGLE_TODO",
        id
    }
}