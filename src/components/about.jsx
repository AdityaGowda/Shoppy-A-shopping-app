import React from "react";
import Navbar from "./navbar/Navbar";
import Footer from "./footer/footer";
import '../App.css';



function About(){
    return(
        <div>
            <Navbar/>
       <center className='contact-heading'>ABOUT</center>
       
       <div className="icons-container2">
        
        <div className="icons">
          <h></h>
        </div>
        </div>
        <Footer/>
        </div>
        )
}

export default About;