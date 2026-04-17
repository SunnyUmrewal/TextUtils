import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from "./components/Navbar";
import TextForm from './components/TextForm';


function App() {

  const [mode, setMode]= useState('light'); //tell if dark mode is enabled or not.

  const toggleMode =()=>{
    if(mode==='light'){
          setMode('dark');
          document.body.style.backgroundColor = '#2d3446';
    }

     else{
          setMode('light');
          document.body.style.backgroundColor = 'white';
    }

  }


  return (
    <>

    {/* <Navbar/>  //this will run component without problem */}

    {/* // if i want to change the title of the component then i can do like: */}
    <Navbar title= "TextUtils" aboutText="About" mode ={mode}toggleMode={toggleMode}/>  {/* //writing title means passing props which will make a website a specific website */}
    {/* //this is useful to make dynamic components and eventually we can use that component in different website. */}
    {/* //i have to change the code in navbar.js */}

    {/* //props are basically giving some values to the component so it can be made for a specific website
    //just like for class car, ferrari is a prop and lambo is also a prop. */}


    {/* <Navbar/> */}
    {/* if we did not mentioned these prop values when calling navbar then default values will be taken mentioned in  Navbar.js */}


    {/* now adding the text form */}

    <div className="container my-3">
        {/*1.  class container is a class in bootstrap which helps to add fixed width, adds left and right margins: auto and makes whole div center
           2.  my-3 class is also a bootstrap class which adds margin of 3px on y axis -> we used to make the heading text slightly below the navbar
        */}
        {/* <TextForm/> */}

        <TextForm heading="Enter your text below" mode={mode} />



        {/* <About/> */}
    </div>
    </>


  );
}

export default App;
