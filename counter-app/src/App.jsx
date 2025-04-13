import React, { useState } from 'react'
import {Counter, InputChnage, Calculator, Calculate} from './Counter'



function App() {
  const [count, setCount] = useState(0)
  const increase = () => {
    setCount(count + 100000)
}
const decrease = () => {
  setCount(count - 1)
}

const reset = () => {
  setCount(0)
}

  return (
  
  <div className='flex flex-col justify-center items-center space-y-10 h-[100%] bg-slate-200'>
     <Counter count={count} setCount={setCount} increase={increase} decrease={decrease} reset={reset}/>
     <InputChnage/>
     <Calculator/>
     <Calculate/>
  </div> 
  );
}

export default App
