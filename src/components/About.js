import React, { useState } from 'react';

export default function About() {

    const [myStyle, setMyStyle] = useState({

        color:'black',
        backgroundColor: "white",
        border: '2px solid white'

    })
    const[btnText, setBtnText]= useState("Enable Dark Mode")

    const toggleStyle =()=>{
        if(myStyle.color === 'white'){
            setMyStyle({
                color:'black',
                backgroundColor: "white",
                border: '2px solid white'
            })
            setBtnText("Enable Dark Mode");
        }
        else{
            setMyStyle({
                color:'white',
                backgroundColor: "black",
                border: '2px solid white'
            })
            setBtnText("Enable Light Mode");

        }
    }

  return (
    <div className="container" style={myStyle}>

      <div className="accordion" id="accordionExample">
        
        <div className="accordion-item">
          
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={myStyle}
            >
              About Us
            </button>
          </h2>

          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
            style={myStyle}
          >
            <div className="accordion-body">
              <strong>This is the about section of this website.</strong>
            </div>
          </div>

        </div>


        <div className="container my-3" style={myStyle}>
            <button type="button" className="btn btn-primary" onClick={toggleStyle}>{btnText}</button>
        </div>

      </div>



    </div>
  );
}

