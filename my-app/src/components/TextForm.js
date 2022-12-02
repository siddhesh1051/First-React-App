import React from 'react'
import { useState } from 'react';


export default function TextForm(props) {
    const handleUpClick = () =>{
        let newText = Text.toUpperCase();
        setText(newText)
    }

    const handleLoClick = () =>{
        let newText = Text.toLowerCase();
        setText(newText)
    }

    const handleClearClick = () =>{
        let newText = "";
        setText(newText)
    }

    const handleCopyClick = () =>{
        var Text = document.getElementById("myBox");
        Text.select();
        navigator.clipboard.writeText(Text.value)
        
    }

    const handleOnChange = (event) =>{
        setText(event.target.value)
    }

    

    const [Text, setText] = useState("");
  return (

        <>
        <div className='container'>
          <h1>{props.heading}</h1>
          <div className="mb-3">
              <textarea className="form-control" id="myBox" value={Text} onChange={handleOnChange} placeholder="Enter Text Here " rows="8"></textarea>
          </div>

          <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
          <button className="btn btn-primary" onClick={handleLoClick}>Convert to Lowercase</button>
          
          <button className="btn btn-primary" id='copy' onClick={handleCopyClick}>Copy </button>
          <button className="btn btn-primary" id='clear' onClick={handleClearClick}>Clear</button>
      </div>
      
      <div className="container my-3">           
            <p>{Text.split(" ").length} Words and {Text.length} characters</p>
          </div>
          </>
        

  )
}
