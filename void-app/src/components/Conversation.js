import React from "react";

const Conversation = (props) => {
    return(
        <li className='conversation'>
            <h3>{props.name}</h3>
        </li>
    )
}

export default Conversation