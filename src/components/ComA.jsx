import React from "react";
import  { createContext } from "react";
import ComB from "./ComB";
const FirstName = createContext();
const LastName = createContext();
const ComA = () => {
    return(
        <>
        <FirstName.Provider value={"yash"}>
            <LastName.Provider value={"shukla"}>

            <ComB/>
            </LastName.Provider >
        </FirstName.Provider>
        </>

    );
};
export default ComA;
export { FirstName , LastName};