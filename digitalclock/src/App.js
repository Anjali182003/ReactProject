import React, { useState } from "react";

const App =()=>{
  let newTime= new Date().toLocaleTimeString();
  const[ctime,setCtime]=useState(newTime);

  const update=()=>{
    newTime=new Date().toLocaleTimeString();
    setCtime(newTime);

  }
  setInterval(update,1000);
  return(
    <>
      <h1>{newTime}</h1><br/>
    </>
  )
}

export default App;
