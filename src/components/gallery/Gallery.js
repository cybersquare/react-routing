import React from "react";
import "./Gallery.css";
import one from './images/one.jpeg';
import two from './images/two.jpeg';
import three from './images/three.jpeg';
import four from './images/four.jpeg';
import five from './images/five.jpeg';
import six from './images/six.jpeg';

function Gallery(){
    return(
    <div className="grid-container">
        <div className="grid-item">
            <img src={one} width="400" alt="one" />
        </div>
        <div className="grid-item">
            <img src={two} width="400"  alt="two" />
        </div>
        <div className="grid-item">
            <img src={three} width="400"  alt="three"/>
        </div>
        <div className="grid-item">
            <img src={four} width="400"  alt="four" />
        </div>
        <div className="grid-item">
            <img src={five} width="400"  alt="five"/>
        </div>
        <div className="grid-item">
            <img src={six} width="400"  alt="six"/>
        </div>
    </div>
    );
}

export default Gallery;