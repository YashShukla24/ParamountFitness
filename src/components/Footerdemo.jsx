import React from "react";
const Footerdemo = () =>{
    const year = new Date().getFullYear();
    return (
        <>
        
            <h1 style={{marginTop:"20%",marginLeft:"50%"}}>copyright © {year}</h1>
    
        </>

    );
};
export default Footerdemo;