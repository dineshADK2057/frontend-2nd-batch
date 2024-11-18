import React, { useState } from 'react'

const Text = () => {

    const [text, setText] = useState("");

    const handelChange = (event)=>{
        setText(event.target.value)
    }
  return (
    <>
        <textarea  cols="80" rows="10" onChange={handelChange} ></textarea>
        <br />

        <button onClick={()=>{
            setText(text.toUpperCase())
        }} >To Upper Case</button>

        <h1>{text}</h1>
        <p>your letter count is {text.length}</p>

    </>
  )
}

export default Text
