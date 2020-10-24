import React from "react";
import { useEffect } from "react";
import { useState } from "react";
const Useeffectdemo = () => {
    const [num,setNum] =useState(0);
    const [nums,setNums] =useState(0);
    useEffect(() => {
        alert("I am clicked ");
    },[num]);
    return(
        <>
        <button onClick={() => {
            setNum(num + 1);
        }}> Click {num}</button>
        <br/>
        <button onClick={() => {
            setNums(nums + 1);
        }}> Click {nums}</button>
        </>

    );
};
export default Useeffectdemo;