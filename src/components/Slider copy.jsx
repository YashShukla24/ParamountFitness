import React from "react";
import Carousel from "react-elastic-carousel";
import 'bootstrap/dist/css/bootstrap.min.css';
import headerdemo from "../image/headerdemo.jpg"

const breakPoints = [


    { width: 1, itemToShow: 1 },
    { width: 550, itemToShow: 2 },
    { width: 768, itemToShow: 3 },
    { width: 1200, itemToShow: 4 },

];
const Slider = () => {
    return (
        <>
            <h1 style={{ textAlign: "center" }}>Slider</h1>
            <div className="Slider">
                <Carousel breakPoints={breakPoints}>
                    <div class="container">
                        <div class="row">
                            <div class="col-sm">
                            <img  src={headerdemo} alt="...."/>
    </div>
                            <div class="col-sm">
                                <img src={"https://i.pinimg.com/236x/39/9a/42/399a42619d2ac5e1b648bd5c69d2a361.jpg"}/>
    </div>
                            <div class="col-sm">
                                <img src={"https://i.pinimg.com/236x/39/9a/42/399a42619d2ac5e1b648bd5c69d2a361.jpg"}/>
    </div>
    
                        </div>
                    </div>
                    <div class="container">
                        <div class="row">
                            <div class="col-sm">
                                <img src={"https://i.pinimg.com/236x/39/9a/42/399a42619d2ac5e1b648bd5c69d2a361.jpg"}/>
    </div>
                            <div class="col-sm">
                                <img src={"https://i.pinimg.com/236x/39/9a/42/399a42619d2ac5e1b648bd5c69d2a361.jpg"}/>
    </div>
                            <div class="col-sm">
                                <img src={"https://i.pinimg.com/236x/39/9a/42/399a42619d2ac5e1b648bd5c69d2a361.jpg"}/>
    </div>
    
                        </div>
                    </div>
                </Carousel>



            </div>
        </>

    );
};
export default Slider;