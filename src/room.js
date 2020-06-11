import './room.css'
import React, {useState} from 'react';

function Room()
{
    let [islit, setlit]= useState(true);
    let [counter, setcounter]=useState(72); 

    return(
        <div className={islit ? "bright" : "dark"}>
            the room is {islit ? "bright" : "dark"}
            <br></br>
            temperature: {counter}
            <br></br>
            <button   onClick={()=>
                           setlit(true) 
                        }>
                light on
        </button>
        <button   onClick={()=>
                           setlit(false) 
                        }>
                light off
        </button>
        <br></br>
        <button onClick={()=>
                           setcounter(++counter) 
                        }>
                incriment your temp
        </button>
        <br></br>
        <button onClick={() =>  setcounter(--counter)}>
                    decriment your temp
        </button>
        </div>
    );
}
export default Room;