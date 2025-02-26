import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Pages from "./Components/pages/Pages";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  console.log("App Component Rendered");

  useEffect(() => {
    AOS.init({
     
    })
    AOS.refresh()
    
  }, [])
  return (
  
    <Pages /> 
  );
}

export default App;
