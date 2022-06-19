import React from "react";


function ListItem(props){

    return   <li id={props.id} 
    onClick={()=>{
        {props.func(props.id)}
    }}>{props.element}</li>
}

export default ListItem