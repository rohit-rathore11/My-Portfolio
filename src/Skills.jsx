import React from "react";
import reaimg from "./reacticon.png";
import htm from "./imagesicon/htmlpic.png";
import cssp from "./imagesicon/css.png";
import javas from "./imagesicon/javas.png";
import material from "./imagesicon/material.png";
import boot from "./imagesicon/boot.png";

const Skills=()=>{


 return(
    <>
        {/*skills section grid  */}
    
    <div className="main-grid" id="skills-section">

        
        <div className="html-grid">
            <img src={htm} alt="langes"/>
        </div>
        <div className="css-grid">
        <img src={cssp} alt="langes"/>

        </div>
        <div className="js-grid">
       
        <img src={javas} alt="langes"/>

        </div>
        <div className="material-grid">
        <img src={material} alt="langes"/>

        </div>
        <div className="boot-grid">
        <img src={boot} alt="langes"/>

        </div>
        <div className="react-grid">
        <img src={reaimg} alt="langes"/>

        </div>


    </div>
    </>
);

}
export default Skills;