import React from "react";
import { useEffect } from "react";
import { useState } from "react";
const Namewebchngdemo = () => {
    const [num,setNum]=useState(0);
    useEffect(() => {
        document.title=`you clicked ${num} times`
    })
    return(

        <>

        <button onClick={() =>{
            setNum(num+1)
        }}> you clicked {num} times</button>
        </>
    );
};
export default Namewebchngdemo;