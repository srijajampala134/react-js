import { useState } from "react";

function Test2(){
    let [user,setUser]=useState("")
    const handler=e=>{
        setUser(e.target.value);
    }
    return(
        <div>
        <input type='text' value={user} name="user" 
        onChange={handler}></input>
       <h2>Check here: {user}</h2> 
        </div>
    )
}
export default Test2;