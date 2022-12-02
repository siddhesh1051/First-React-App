import React from 'react'
import { useState } from 'react';

export default function TextForm(props) {
    const handleUpClick = () =>{
        let newText = Text.toUpperCase();
        setText(newText)
    }
    const handleOnChange = (event) =>{
        setText(event.target.value)
    }
    const [Text, setText] = useState();
  return (
    <div>
<h1>{props.heading}</h1>     
<div className="mb-3">
<textarea className="form-control" id="myBox" value={Text}  onChange={handleOnChange} placeholder = "Enter Text Here"  rows="8"></textarea>
</div>

    <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
    </div>

  )
}
