import React, { useState } from "react";

const App =()=>{
  let newTime= new Date().toLocaleTimeString();
  const[ctime,setCtime]=useState(newTime);

  const update=()=>{
    newTime=new Date().toLocaleTimeString();
    setCtime(newTime);

  }
  return(
    <>
      <h1>{newTime}</h1><br/>
      <button onClick={update}>Get Time</button>
    </>
  )
}

export default App;
