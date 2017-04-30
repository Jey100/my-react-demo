/**
 * Created by jey on 2017/4/30.
 */

/**
 * reducers 是相应的抽象,对action的相应,是纯方法
 * 需要传入旧状态和action,,并且返回新状态
 */


const visibilityFilter = (state="SHOW_ALL", action) =>{
    switch(action.type){
        case "SET_VISIBILITY":
            return action.filter
        default:
            return state;
    }
}

export default visibilityFilter
