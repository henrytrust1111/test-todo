import React, { useRef, useState } from 'react'

const TestUseRef = () => {
    let [input,setInput] = useState()
    let [textVal,setTextVal] = useState ()
    const inputRef = useRef(null)

   const handleClick = () => {
   const task = inputRef.current.value
    setInput(task)
    }
  return (
    <div>
        <input type="text"  ref={inputRef} />
        <button onClick={()=>handleClick()}>Submit</button>
        <p> {input} </p>
    </div>
  )
}

export default TestUseRef