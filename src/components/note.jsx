import React from 'react';


function Note(props) {
    
    function handleClick(){
        props.onRemove(props.id);
    }

    return(
        <div className="note">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <button onClick = {handleClick}>Remove</button>
        </div>
    );
}

export default Note;