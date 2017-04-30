/**
 * Created by jey on 2017/4/30.
 */

import React from 'react';
const Todo = ({onClick, completed, text}) =>{
    return(
    <li onClick={onClick} style={{textDecoration:completed?"line-through":"none"}}>
        {text}
    </li>
    )
}

export default Todo;