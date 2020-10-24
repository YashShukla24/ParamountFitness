import React from "react";
import { useState } from "react";
import Result from "./Result";
const Search = () => {
    const [img,setImg]= useState("");
    const inputEvent = (event) => {
        const data = event.target.value;
        console.group(data);
        setImg(data);

        
    };
    return(
        <>
        
        <div style={{ marginLeft:"40%" , marginTop:"5%"}}>
            <input type="text" placeholder=" Type here to search " value={img} onChange={inputEvent}/> 
        
    
        </div>
        <div style={{ marginLeft:"20%" , marginTop:"5%"}}>
        {img === "" ? null : <Result  name={img}/>}
        </div>
    </>
    );
} ;
export default Search;