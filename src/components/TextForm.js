
//making a textform and a button

// import React from 'react';
// // taking form component from bootstrap

// export default function TextForm(props) {
//   return (
//     <>
//     <div>
      
//         <h1>{props.heading}</h1>
//         <div className="mb-3">
//           <textarea
//             className="form-control"
//             id="myBox"
//             rows="15"
//           ></textarea>
//         </div> 
//         <button className="btn btn-primary">UPPERCASE</button>



//     </div>

//     </>
//   );
// }

// -----------------------------------------------

// import React, {useState} from 'react';

// //lets use the hook concept and state concept/

// //hooks are special function in react the lets us hook into features like- state and lifecycle inside functional component.
// // using state which is a component's memory that is used to store data and change it over time without reloading the screen.
// // see the textform.js




// console.log()

// export default function TextForm(props) {
//     const handleUpClick=()=>{
//         // console.log("Uppercase was clicked");
//         // setText("you have clicked on handleUpClick");
//         let newText= text.toUpperCase();
//         setText(newText);

//     }


//     //when onChange method is triggered, then we get an event for free and that helps us update the value in the textform 
//     // otherwise we will not be able to write in the textform
//     const handleOnChange=(event)=>{
//         // console.log("On change");
//         setText(event.target.value);
        
//     }

//       // using usestate
//   const [text, setText] = useState('Please remove this text and enter your text');
//     //text is our prop. which will be changed over time, setText is our function that will change the value of text we cannot do like text="hello"; NO
//     //usestate("enter text here") is default text which is the initial value given in the input. user must change it.
//     // setText("New text");   //to change the text we use this function mentioned above


//   return (
//     <>
//     <div>
//         <h1>{props.heading} </h1>
//         <div className="mb-3">
//           <textarea
//             className="form-control"
//             id="myBox"
//             rows="15"
//             value={text}  //this prints the text value in the text area.
//             onChange={handleOnChange} //this method is triggered when we write something in text area.
            
//           ></textarea>
//         </div> 
//         <button className="btn btn-primary" onClick={handleUpClick} >UPPERCASE</button>

//     </div>
    
//     </>
//   );
// }







// -------------------------------------------------------------------------------------------------

//lets add a character count and words count in our text box in real time.
//adding lower case converter button and function also.

// import React, {useState} from 'react';

// export default function TextForm(props) {
//     const handleUpClick=()=>{
//         let newText= text.toUpperCase();
//         setText(newText);

//     }
//     const handleLowerClick=()=>{
//         let newText= text.toLowerCase();
//         setText(newText);

//     }
//     const handleOnChange=(event)=>{
//         setText(event.target.value);
        
//     }

//   const [text, setText] = useState('');

//   return (
//     <>
//     <div className="contianer">
//         <h1>{props.heading} </h1>
//         <div className="mb-3">
//           <textarea
//             className="form-control"
//             id="myBox"
//             rows="15"
//             value={text}  
//             onChange={handleOnChange}

//           ></textarea>
//         </div>                          {/* mx-1 is bootstrap class which gives margin in x by 1 */}
//         <button className="btn btn-primary mx-1" onClick={handleUpClick} >UPPERCASE</button>

//         <button className="btn btn-primary mx-1" onClick={handleLowerClick} >lowercase</button>
    
    
//     </div>

//     {/* using javascript metods to calculate words and characters. */}

//     <div className="container" mb-2>
//       <h2>Your content summary :</h2>
//       <p>{text.split(" ").length} Words and {text.length} Characters</p>
//       <p>{.008 * text.split(" ").length} Minuites to read the whole text.</p>
//     </div>

//     </>
//   );
// }


//-----------------------------------------------------------------------------------------------------------------------

// now adding some more features to our text utils project.

import React, {useState} from 'react';


export default function TextForm(props) {

    const handleUpClick=()=>{
        let newText= text.toUpperCase();
        setText(newText);

    }
    const handleLowerClick=()=>{
        let newText= text.toLowerCase();
        setText(newText);

    }

    const handleTitleCase=()=>{
        let newText=text.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
        setText(newText);
    }

    const handleExtractText = () => {
      let newText = text.replace(/[^a-zA-Z\s]/g, '').replace(/\s+/g, '').trim();
      setText(newText);
    };

    const handleCopy=(event)=>{
      var text=document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
    }

    const handleExtraSpace=(event)=>{
      let newText=text.split(/[ ]+/);
      setText(newText.join(" "));
    }



    const handleOnChange=(event)=>{
        setText(event.target.value);   
    }


  const [text, setText] = useState('');


  return (
    <>
    <div className="contianer" style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading} </h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            rows="15"
            value={text}  
            onChange={handleOnChange}
            style={{backgroundColor:props.mode==='dark'?'#333':'white',color:props.mode==='dark'?'white':'black'}}

          ></textarea>
        </div>        

        <button className="btn btn-primary mx-1" onClick={handleUpClick} >UPPERCASE</button>

        <button className="btn btn-primary mx-1" onClick={handleLowerClick} >lowercase</button>
        
        <button className="btn btn-primary mx-1" onClick={handleTitleCase}>Title Case</button>
        
        <button className="btn btn-primary mx-1" onClick={handleExtractText}>ExtractText</button>

        <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
        
        <button className="btn btn-primary mx-1" onClick={handleExtraSpace}>Remove Extra Space</button>
        
    
    </div>

    <div className="container mb-2 my-3 " style={{color:props.mode==='dark'?'white':'black'}}  >
      <h2>Your content summary :</h2>
      <p>{text.split(" ").length} Words and {text.length} Characters</p>
      <p>{.008 * text.split(" ").length} Minuites to read the whole text.</p>
    </div>


    </>
  );
}




