/**
 * Created by jey on 2017/4/30.
 */

/**
 * reducers 是相应的抽象,对action的相应,是纯方法
 * 需要传入旧状态和action,,并且返回新状态
 */


const todo = (state, action) =>{
    switch(action.type){
        case "ADD_TODO":
            console.log("-->"+action.type)
            return {
                id:action.id,
                text:action.text,
                completed:false
            }
        case "TOGGLE_TODO":
            if(state.id !== action.id){
                return state;
            }
            return Object.assign({}, state,{
                completed:!state.completed
            })
        default:
            return state;
    }
}

const todos = (state = [], action)=>{
    switch (action.type){
        case "ADD_TODO":
            console.log(state)
            return [...state,todo(undefined,action)];
        case "TOGGLE_TODO":
            return state.map(n=>todo(n,action))
        default:
            return state;
    }
}

export default todos;