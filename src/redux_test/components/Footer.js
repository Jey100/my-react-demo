/**
 * Created by chenliming on 2017/4/30.
 */

import React from 'react';
import FilterLink from "../containers/FilterLink";

const Footer = () =>{
    return(<p>
        Show
        {""}
        <FilterLink filter="SHOW_ALL">ALL</FilterLink>
        {","}
        <FilterLink filter="SHOW_ACTIVE">active</FilterLink>
        {","}
        <FilterLink filter="SHOW_COMPLETED">completed</FilterLink>
        {","}

    </p>)
}
export default Footer;