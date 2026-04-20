import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from "./components/Navbar";
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {

  const [mode, setMode]= useState('light'); //tell if dark mode is enabled or not.

  const toggleMode =()=>{
    if(mode==='light'){
          setMode('dark');
          document.body.style.backgroundColor = '#2d3446';
          showAlert("Dark mode has been enabled","success");
    }

     else{
          setMode('light');
          document.body.style.backgroundColor = 'white';
          showAlert("Light mode has been enabled","success");

    }

  }





  const [alert, setAlert] = useState(null);  //creating an object

  const showAlert=(message, type)=>{
    setAlert({
      msg:message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);

  }

const [theme, setTheme] = useState("light");
const changeTheme = (newTheme) => {
  setTheme(newTheme);

  if (newTheme === "dracula") {
    document.body.style.backgroundColor = "#444444";
  } 
  else if (newTheme === "valentine") {
    document.body.style.backgroundColor = "#ffe4e1";
  } 
  else if (newTheme === "retro") {
    document.body.style.backgroundColor = "#f4e1d2";
  } 

  else if(newTheme=="default"){
    document.body.style.backgroundColor="white";
  }

  else {
    document.body.style.backgroundColor = "white";
  }


  showAlert(`${newTheme} mode has been enabled`, "success");
};
  





  return (
    <>
    {/* <BrowserRouter> */}

    {/* <Navbar/>  //this will run component without problem */}

    {/* // if i want to change the title of the component then i can do like: */}
    <Navbar title= "TextUtils" aboutText="About" mode ={mode} toggleMode={toggleMode} changeTheme={changeTheme}/>  {/* //writing title means passing props which will make a website a specific website */}
    {/* //this is useful to make dynamic components and eventually we can use that component in different website. */}
    {/* //i have to change the code in navbar.js */}

    {/* //props are basically giving some values to the component so it can be made for a specific website
    //just like for class car, ferrari is a prop and lambo is also a prop. */}


    {/* <Navbar/> */}
    {/* if we did not mentioned these prop values when calling navbar then default values will be taken mentioned in  Navbar.js */}


    {/* now adding the text form */}
    <Alert alert={alert}/>

    <div className="container my-3">
        {/*1.  class container is a class in bootstrap which helps to add fixed width, adds left and right margins: auto and makes whole div center
           2.  my-3 class is also a bootstrap class which adds margin of 3px on y axis -> we used to make the heading text slightly below the navbar
        */}
        {/* <TextForm/> */}



        {/* using react router  and setting the links in the navbar.js*/}
        {/* <Routes>

        <Route path="/about" element={<About />} />

        <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter your text below" mode={mode} />} /> */}

        {/* </Routes> */}

        <TextForm showAlert={showAlert} heading="Enter your text below" mode={mode}/>
        {/* <About /> */}

        
    </div>
    {/* </BrowserRouter> */}


    
    </>


        



  );
}

export default App;
