import React, { useState } from 'react'
import { useMemo } from 'react';


const App = () => {
  const[count,setcount]=useState(0);
  const[input,setinput]=useState(0)
  function expensiveTask(num){
    console.log("dhirajjadhav");
    for( let i=0;i<=1000000000;i++){}
      return num*2
  }
 const doubleValue=useMemo(() => expensiveTask(input), [input])


  return (
    <div>
      <button onClick={()=>setcount(count+1)}>increment</button>
      <div>
        count{count}
        value:{input}
        <input type="number" placeholder='enter the number'
        onChange={(e)=>setinput(e.target.value)}/>
      </div>
      <div>
        double:{doubleValue}
      </div>
    </div>
  )
}

export default App