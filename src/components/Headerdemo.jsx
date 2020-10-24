import React from "react";
import headerdemo from "../image/headerdemo.jpg"
import {Link} from "react-router-dom";
const Headerdemo = () =>{
    return(

        <>
        <div style={{margin:"0px",padding:"0px"}}>
            {/* <img  src={headerdemo} alt="...." width="70" height ="70" /> */}
            {/* <h1>own keeps</h1> */}
            <ul style={{display:"flex",listStyleType:"none",marginLeft:"40%"}}>
                <li>
                    <Link to="/"> Home
                    </Link>
                    </li>&nbsp;&nbsp;&nbsp;

                <li>contact </li>&nbsp;&nbsp;&nbsp;  
                <li>
                    <Link  to="/about">About</Link></li>&nbsp;&nbsp;&nbsp;
                <li>services</li>&nbsp;&nbsp;&nbsp;
            </ul>

        </div>
        </>

    );
};
export default Headerdemo;