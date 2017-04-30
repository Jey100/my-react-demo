/**
 * Created by chenliming on 2017/4/30.
 */

import React from 'react';
const Link = ({active, children , onClick}) =>{
    if(active){
        return <span>{children}</span>
    }
    return (<a href="#" onClick={e=>{e.preventDefault();onClick();}}>{children}</a>)
}

export default Link;