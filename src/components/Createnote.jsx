import React from "react";
import React,{ useState } from "react";
const Createnote = () => {
    const [note,setNote]=useState({
        tittle:"",
        content:"",
    });
    const InputEvent = (event) =>{
        const{name,value}=event.target;
        setNote((oldD                     ata) =>{
            return{
                ...oldData,
                [name]: value;
            };

            
        });

    };


    return (
        <>
            <div>
                <form>

                    <input type="text" name="tittle" value="note.tittle" onchange={InputEvent} placeholder="tittle" autoComplete="off" />
                    <textarea rows="" column="" name="content" value="note.content" onchange={InputEvent} placeholder="write a note ....."></textarea>
                    <button>
                        ADD
                </button>

                </form>
            </div>
        </>

    );
};
export default Createnote