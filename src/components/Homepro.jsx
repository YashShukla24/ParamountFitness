import React from "react";
import Commancomppro from "./Commancomppro";
import { NavLink } from "react-router-dom";
import zymhomeproimg from "../image/zymhomeproimg.jpg"
const Homepro = () =>{
    return(
        <>
         <Commancomppro
         name="Time for Fitness"
         imgsrc={ zymhomeproimg}
         visit="/service"
         btname="Get Started"
        />
        </>


    );
};
export default Homepro;