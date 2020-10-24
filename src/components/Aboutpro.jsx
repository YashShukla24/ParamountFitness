import React from "react";
import Commancomppro from "./Commancomppro";
import aboutprozym from "../image/aboutprozym.jpg";
const Aboutpro = () => {
    return (
        <>
         <Commancomppro
         name="welcome in about page"
         imgsrc={aboutprozym}
         visit="/contact"
         btname="Contact Now"
        />
        </>


    );
};
export default Aboutpro;