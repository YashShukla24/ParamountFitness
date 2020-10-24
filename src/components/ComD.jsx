import React from "react";
import { useContext } from "react";
import {FirstName, LastName} from "./ComA";

const ComD = () => {
    const fname = useContext(FirstName);
    const lname = useContext(LastName);
    return(
        <>
        <h1> {fname}{" "} {lname}</h1>
        {/* <FirstName.Consumer>
            {(fname)=> {
                return(
                    <LastName.Consumer>
                        {(lname) => {
                            return(
                            <h1>Hello I Am {fname}{" "}{lname}</h1> 
                            );
                        }}
                    </LastName.Consumer>
                    
                
                

                );
            }}
        </FirstName.Consumer> */}

        </>


    );
};
export default ComD;