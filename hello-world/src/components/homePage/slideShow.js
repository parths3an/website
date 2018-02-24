import React, { Component } from 'react';
import mainShowcase from '../../images/main-showcase.jpeg';
import cuteBaby from '../../images/cute_baby_boy.jpg';
import superCuteBaby from '../../images/So-Cute-Baby.jpg';
import './slideShow.css';

class SlideShow extends Component {

  render() {
   
let imgStyle= {
  width: 1024,
}
    return (

      <div className="SlideShow">
        <div className="row">
<div id="showcase" className="card">
    <div className="slideshow-container">
    <div className="mySlides fade">
              <img src={mainShowcase} alt={mainShowcase} style= {imgStyle} />      
          </div>
          
            <div className="mySlides fade">
              <img src={cuteBaby} alt={cuteBaby} style= {imgStyle} />     
            </div>
          
            <div className="mySlides fade">
              <img src={superCuteBaby} alt={superCuteBaby}  style= {imgStyle} />
            </div>   
    </div>
    <br />
</div>  
<div className="dotClass">
            <span className="dot" ></span> 
            <span className="dot" ></span> 
            <span className="dot" ></span> 
          
  </div> 
  <script src = "./slideShowSlider.js"> </script>
</div>
</div>
    );
  }
}

export default SlideShow;
