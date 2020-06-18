import React, {useState} from 'react';

function Room() {

    let [islit,setlit] = useState(true);
    return(
    <div>
        the room is {islit? 'lit':'dark'}
        <br/>
        <button onClick = { ()=> setlit(!islit)}>

            flip

        </button>
    </div>
    )

    
  }
  
  export default Room;
  