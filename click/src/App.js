import React, { useState } from 'react';

const App=()=>{

  const state=useState();
  console.log(state);
  
  // let count=0;
const [count,setCount]=useState(0);

const IncNum=()=>{
  setCount(count+1);
console.log("clicked"+ count++);
}
  return(
<>
  <h1>{count}</h1>
  <button onClick={IncNum}>Click me</button>
</>
  );
};

export default App;