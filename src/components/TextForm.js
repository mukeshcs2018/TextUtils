
import React, { useState } from 'react';

export default function TextForm(props) {

    const handleOnChange = (event) => {
        //console.log("On change");
        setText(event.target.value);
    }

    

    const handleUpClick = () => {
        // console.log("Handle Up Clicked" + text ); //we can access text here also.
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLowClick = () =>{
        let newText = text.toLowerCase();
        setText(newText);

    }

    const countWords = (str) => {
        return str.trim().split(/\s+/).length;
      }


    const [text, setText] = useState("")
    return (
        <>
        <div className='container'>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" id="textBox" rows="10" value={text} onChange={handleOnChange}></textarea>
                <button type="button" className="btn btn-primary my-2" onClick={handleUpClick}>Convert to UpperCase</button>
                <button type="button" className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to LowerCase</button>
                
            </div>

        </div>
        <div className="container my-2">
            <h2>Your Text Summary.</h2>
            <p><b>{ text === "" ? 0 : countWords(text)  }</b> words and <b>{text.length}</b> characters.</p>
            <p>Takes around {0.008 * text.split(" ").length} minutes to read.</p>
            <h3>Preview</h3>
            <p>{text}</p>

        </div>
        </>
    )
}
