import React from "react";
import logo from "./logoimg.png";
import bimg from "./bacrohit.png";
import rimg from "./rohitportc.png";
import mensimg from "./rohitimg.jpg";
import recticon from "./reacticon.png";
// import {Link} from "react-dom/client"


const Navbar = () => {
  return (
    <>
    {/* nav and total background */}
    <div className="hero">
        <nav>
            <img src={logo} alt="logo img" className="logo" />

            <ul>
                
                <li ><a href="#" >HOME</a></li>
                <li><a href="#about-section" >ABOUT</a></li>
                <li><a href="#skills-section" >SKILLS</a></li>
                <li><a href="#" >EXPERIENCE</a></li>
                <li><a href="#project-section" >PROJECTS</a></li>
                <li><a href="#hire-section" >HIRE ME</a></li>


            </ul>
        </nav>
        <div className="detel">
            <h1>I, m Rohit <span>Rathore</span></h1>
            <p>This is my official portfolio website to show all
                <br/>Details and work experience 

            </p>
            <a href="#">DOWNLOAD RESUME</a>
        </div>
        <div className="image">
            <img src={bimg} alt="back image" className="shape"/>
            <img  src={rimg} alt="image here" className="rohit-img"/>
        </div>
        <div className="dp">
            <img src={mensimg} alt="pd" className="dp"/>
        </div>
    </div>
        <div className="mainabout">

        <div className="aboutme" id="about-section">
            <h1>About Me </h1>
            <p>I,m a "Detail-oriented <span> Front-End Developer</span><br/> with more than six month of experience working with HTML, CSS, Javascript,Bootstrap, and<span> Reactjs</span> .<br/>experience, specializing in UI design, web development, project management and website development." </p>

        </div>
        </div>
       
    </>
  );
};
export default Navbar;
