import React, {useState} from 'react';
import './Room.css';

function Room() {

    let [islit,setlit] = useState(true);
    return(
    <div className = { "room"+(islit? 'lit': 'dark') }>
        the room is {islit? 'lit':'dark'}
        <br/>
        <button onClick = { ()=> setlit(!islit)}>

            flip

        </button>
    </div>
    )

    
  }
  
  export default Room;
  