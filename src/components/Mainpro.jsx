import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import Homepro from "./Homepro";
import {Redirect, Route, Switch} from "react-router-dom";
import Contactpro from "./Contactpro";
import Servicepro from "./Servicepro";
import Aboutpro from "./Aboutpro";
import Navbarpro from "./Navbarpro";
import Footerpro from "./Footerpro"
const Mainpro = () =>{
    return(
        <>
        <Navbarpro/>
        <Switch>
            <Route exact path="/" component={Homepro}/>
            <Route exact path="/about" component={Aboutpro}/>
            <Route exact path="/contact" component={Contactpro}/>
            <Route exact path="/service" component={Servicepro}/>
           <Redirect to="/"/> 
        </Switch>
        <Footerpro/>
    
        </>


    );
};
export default Mainpro;