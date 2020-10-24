import React, { Component } from 'react';
import banner from '../image/banner-sample.png';
import banner1 from '../img/benner.jpg';
class Footer extends Component {
    state = {}
    render() {
        return (
            <div>


               <img src={banner1} alt="Header" width="100%" height="200px" />
                <img src={banner} alt="Header" width="100%" height="200px" />

            </div>
        );
    }
}

export default Footer;