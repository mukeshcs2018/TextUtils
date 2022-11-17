
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

    const handleClearClick = () =>{
        setText("")
    } 
    
    const handleRemoveSpaces = () =>{
        let words = text.split(' ');
        let joinedWords = '';
        // console.log(words);
        words.forEach((elem)=>{
            if(elem[0] !== undefined){
                joinedWords += elem + " ";
                // console.log(joinedWords);
            }
        })
        setText(joinedWords);
    }

    const handleSpeakClick = () =>{
        let msg = new SpeechSynthesisUtterance();
        var voices;
        var timer = setInterval(function() {
            voices = speechSynthesis.getVoices();
            console.log(voices);
            if (voices.length !== 0) {
                msg = new SpeechSynthesisUtterance();
                msg.text = text;
                msg.voice = voices[12];
                window.speechSynthesis.speak(msg);
                msg.lang = 'en-US';
                clearInterval(timer);
            }
        }, 200);
        timer();
        speechSynthesis.speak("hello world");


      }


    const countWords = (str) => {
        return str.trim().split(/\s+/).length;
      }


    const [text, setText] = useState("")
    return (
        <>
        <div className='container'>
            <h1><b>{props.heading}</b></h1>
            <div className="mb-3">
                <textarea className="form-control" id="textBox" rows="10" value={text} onChange={handleOnChange}></textarea>
                <button type="button" className="btn btn-primary my-2" onClick={handleUpClick}>Convert to UpperCase</button>
                <button type="button" className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to LowerCase</button>
                <button type="button" className="btn btn-primary mx-2" onClick={handleRemoveSpaces}>Remove Extra Spaces</button>
                <button type="button" className="btn btn-primary" onClick={handleClearClick}>Clear Text</button>
                <button type="submit" className="btn btn-warning mx-2 my-2" onClick={handleSpeakClick}>Speak</button>
                
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
